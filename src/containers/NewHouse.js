import React, { useRef, useState, useEffect } from "react";
import {
  TextField,
  Chip,
  Divider,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import PublishIcon from "@material-ui/icons/Publish";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import { createHouse, uploadPhoto, getHouses } from "../firebase";
import PhotoContainer from "../components/PhotoContainer";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    width: "80%",
    marginTop: "20px",
  },
  container: {
    backgroundClip: "#161C24",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: "10px",
  },
  notchedOutline: { borderColor: "green !important" },
  photoContainer: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
  },

  newPhotoBox: {
    display: "flex",
    alignItems: "center",
    border: "1px dashed #3F66D3",
    height: "160px",
    width: "160px",
    justifyContent: "center",
  },
  newPhotoBoxImg: {
    display: "flex",
    alignItems: "center",
    border: "1px dashed #3F66D3",
    height: "160px",
    width: "160px",
    justifyContent: "center",
    marginRight: "5px",
  },
  divider: {
    height: "1px",
    marginTop: "25px",
    marginBottom: "25px",
    width: "100%",
    backgroundColor: blue[900],
  },
  Snackbar: {
    backgroundColor: "#0dc662",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const NewHouse = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const firstPhoto = useRef(null);
  const [currentId, setCurrentId] = useState(0);
  const handleAttach = () => {
    firstPhoto.current.click();
  };

  useEffect(() => {
    const fetchHouses = async () => {
      const propertyList = await getHouses();
      const list = propertyList.map((item) => {
        return {
          ...item,
          id: Number(item.id),
        };
      });

      const sortedList = numericalSort(list);
      const sortedListLastItem = sortedList[sortedList.length - 1];
      setCurrentId(sortedListLastItem.id);
    };
    fetchHouses();
  }, []);

  const parseDate = () => {
    var date = new Date();
    var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];

    return dateString.replaceAll("-", "/");
  };
  const HouseSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, "Muy Corto !")
      .max(50, "Muy Largo!")
      .required("Nombre requerido"),
    precio: Yup.number().required("Precio requerido"),
    zona: Yup.object().required("Zona requerida"),
    tipoDePropiedad: Yup.object().required("Tipo De Propiedad requerido"),
    tipoDeOperacion: Yup.object().required("Tipo De Operacion requerida"),
    fotoPrincipal: Yup.object().required("Foto requerida"),
    moneda: Yup.object().required("Moneda requerida"),
    metros: Yup.number().required("Metros requeridos"),
    posicion: Yup.string().required("Coordenadas requeridas"),
    metrosCubiertos: Yup.number().required("Metros cubiertos requeridos"),
    requisitos: Yup.array().required("Requisitos requeridos"),
    servicios: Yup.array().required("Servicios requeridos"),
    ambientes: Yup.number().required("Ambientes requeridos"),
    sanitarios: Yup.number().required("Sanitarios requeridos"),
    descripcion: Yup.string().required("Descripcion requerida"),
    direccion: Yup.string().required("Direccion requerida"),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      zona: "",
      tipoDePropiedad: "",
      tipoDeOperacion: "",
      moneda: "",
      metros: "",
      fotoPrincipal: "",
      metrosCubiertos: "",
      ambientes: "",
      sanitarios: "",
      video: "",
      descripcion: "",
      direccion: "",
      servicios: [],
      requisitos: [],
      alquilerTuristico: false,
      publicadoEn: "",
      archivos: [],
      posicion: "-32.380023,-65.023044",
    },
    enableReinitialize: true,
    validationSchema: HouseSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        if (!currentId) {
          return;
        }

        setLoading(true);
        const id = currentId + 1;
        const houseData = {
          ...values,
          id: id.toString(),
          zona: values.zona?.value,
          tipoDePropiedad: values.tipoDePropiedad?.value,
          tipoDeOperacion: values.tipoDeOperacion?.value,
          moneda: values.moneda?.value,
          servicios: values.servicios.map((item) => item.name),
          requisitos: values.requisitos.map((item) => item.name),
          fotoPrincipal: values.fotoPrincipal.url,
          publicadoEn: parseDate(),
          posicion: values.posicion.split(","),
          archivos: [values.fotoPrincipal.url, ...values.archivos],
        };

        await createHouse(houseData);
        setOpenNotification(true);

        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (error) {
        console.error(error, "errorrr");
      }
      setLoading(false);
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    handleChange,
    handleBlur,
    values,
  } = formik;

  function numericalSort(list) {
    const sortedList = list.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }

      return 0;
    });

    return sortedList;
  }

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  return (
    <FormikProvider value={formik}>
      <Grid className={classes.container}>
        <Card className={classes.root}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container xs={12} sx={{ p: 20 }}>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                style={{
                  fontWeight: "bold",
                }}
              >
                CREAR NUEVA PROPIEDAD
              </Typography>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="nombre"
                  placeholder="Nombre de la propiedad"
                  error={Boolean(touched.nombre && errors.nombre)}
                  helperText={touched.nombre && errors.nombre}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiline
                  rows={6}
                  name="descripcion"
                  placeholder="Descripcion de la propiedad"
                  error={Boolean(touched.descripcion && errors.descripcion)}
                  helperText={touched.descripcion && errors.descripcion}
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Precio"
                  placeholder="Precio de la propiedad "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="precio"
                  onKeyDown={(e) =>
                    (e.keyCode === 69 || e.keyCode === 190) &&
                    e.preventDefault()
                  }
                  error={Boolean(touched.precio && errors.precio)}
                  helperText={touched.precio && errors.precio}
                  value={values.precio}
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Divider flexItem className={classes.divider} />

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Barrio"
                  variant="outlined"
                  onChange={handleChange}
                  name="direccion"
                  placeholder="Barrio de la propiedad"
                  onBlur={handleBlur}
                  error={Boolean(touched.direccion && errors.direccion)}
                  helperText={touched.direccion && errors.direccion}
                  value={values.direccion}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  id="Zona"
                  options={[
                    { value: "merlo", name: "Merlo" },
                    {
                      value: "cerroDeOro",
                      name: "Cerro De Oro",
                    },
                    {
                      value: "carpinteria",
                      name: "Carpinteria",
                    },
                    { value: "losMolles", name: "Los Molles" },
                    {
                      value: "villaElena",
                      name: "Villa Elena",
                    },
                    {
                      value: "cortaderas",
                      name: "Cortaderas",
                    },
                    {
                      value: "villaLarca",
                      name: "Villa Larca",
                    },
                    { value: "papagayo", name: "Papagayo" },
                    {
                      value: "piedraBlanca",
                      name: "Piedra Blanca",
                    },
                    { value: "achiras", name: "Achiras" },
                    {
                      value: "villaMercedes",
                      name: "Villa Mercedes",
                    },
                    { value: "sanLuis", name: "San Luis" },
                    {
                      value: "elTrapiche",
                      name: "El Trapiche",
                    },
                    { value: "elVolcan", name: "El Volcan" },
                    {
                      value: "potreroDeLosFunes",
                      name: "Potrero de los funes",
                    },
                    {
                      value: "traslasierra",
                      name: "Traslasierra",
                    },
                    {
                      value: "juanaKoslay",
                      name: "Juana Koslay",
                    },
                    { value: "laPunta", name: "La Punta" },
                    { value: "balde", name: "Balde" },

                    {
                      value: "sanJeronimo",
                      name: "San Jeronimo",
                    },
                    {
                      value: "otrasZonas",
                      name: "Otras Zonas",
                    },
                    { value: "cordoba", name: "Cordoba" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("zona", instance.option);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Zona"
                      name="zona"
                      onBlur={handleBlur}
                      error={Boolean(touched.zona && errors.zona)}
                      helperText={touched.zona && errors.zona}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  options={[
                    { value: "casa", name: "Casa" },
                    { value: "cabaña", name: "Cabaña" },
                    { value: "campo", name: "Campo" },
                    {
                      value: "complejoTuristico",
                      name: "Complejo Turistico",
                    },
                    { value: "loteo", name: "Loteo" },
                    { value: "lotes", name: "Lotes" },
                    { value: "galpon", name: "Galpon" },
                    { value: "hotel", name: "Hotel" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("tipoDePropiedad", instance.option);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Tipo De Propiedad"
                      name="tipoDePropiedad"
                      onBlur={handleBlur}
                      error={Boolean(
                        touched.tipoDePropiedad && errors.tipoDePropiedad
                      )}
                      helperText={
                        touched.tipoDePropiedad && errors.tipoDePropiedad
                      }
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  options={[
                    { value: "permuta", name: "Permuta" },
                    { value: "venta", name: "Venta" },
                    { value: "alquiler", name: "Alquiler" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("tipoDeOperacion", instance.option);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Tipo De Operacion"
                      name="tipoDeOperacion"
                      onBlur={handleBlur}
                      error={Boolean(
                        touched.tipoDeOperacion && errors.tipoDeOperacion
                      )}
                      helperText={
                        touched.tipoDeOperacion && errors.tipoDeOperacion
                      }
                    />
                  )}
                />
              </Grid>
              <Divider flexItem className={classes.divider} />

              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  options={[
                    { value: "pesos", name: "Pesos" },
                    { value: "dolares", name: "Dolares" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("moneda", instance.option);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Tipo De Moneda"
                      name="moneda"
                      onBlur={handleBlur}
                      error={Boolean(touched.moneda && errors.moneda)}
                      helperText={touched.moneda && errors.moneda}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Metros"
                  placeholder="Metros totales de la propiedad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="metros"
                  error={Boolean(touched.metros && errors.metros)}
                  helperText={touched.metros && errors.metros}
                  value={values.metros}
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Metros Cubiertos"
                  placeholder="Metros Cubiertos de la propiedad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="metrosCubiertos"
                  error={Boolean(
                    touched.metrosCubiertos && errors.metrosCubiertos
                  )}
                  helperText={touched.metrosCubiertos && errors.metrosCubiertos}
                  value={values.metrosCubiertos}
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Ambientes"
                  placeholder="Ambientes  de la propiedad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="ambientes"
                  error={Boolean(touched.ambientes && errors.ambientes)}
                  helperText={touched.ambientes && errors.ambientes}
                  value={values.ambientes}
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Sanitarios"
                  placeholder="Sanitarios de la propiedad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="sanitarios"
                  error={Boolean(touched.sanitarios && errors.sanitarios)}
                  helperText={touched.sanitarios && errors.sanitarios}
                  value={values.sanitarios}
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>

              <Divider flexItem className={classes.divider} />

              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Link video"
                  placeholder="Embeded youtube link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="video"
                  error={Boolean(touched.video && errors.video)}
                  helperText={touched.video && errors.video}
                  value={values.video}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  label="Coordenadas Aproximadas"
                  placeholder="EJ= -32.380023,-65.023044"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="posicion"
                  error={Boolean(touched.posicion && errors.posicion)}
                  helperText={touched.posicion && errors.posicion}
                  value={values.posicion}
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} className={classes.input}>
                <Autocomplete
                  multiple
                  options={[
                    { name: "Gas" },
                    { name: "Luz" },
                    { name: "Agua" },
                    { name: "Wi-Fi" },
                    { name: "Direct TV" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  filterSelectedOptions
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("servicios", [
                      ...values.servicios,
                      instance.option,
                    ]);
                  }}
                  renderTags={(value) =>
                    values.servicios.map((option, index) => {
                      return (
                        <Chip
                          variant="outlined"
                          key={option.name}
                          label={option.name}
                          onDelete={() => {
                            const nonDeleted = values.servicios.filter(
                              (item) => item.name !== option.name
                            );
                            setFieldValue("servicios", nonDeleted);
                          }}
                        />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Servicios"
                      onBlur={handleBlur}
                      error={Boolean(touched.servicios && errors.servicios)}
                      helperText={touched.servicios && errors.servicios}
                    />
                  )}
                />
              </Grid>

              <Grid xs={12} className={classes.input}>
                <Autocomplete
                  multiple
                  options={[
                    { name: "Cochera" },
                    { name: "Pileta" },
                    { name: "Listo para escriturar" },
                    { name: "Bosque Nativo" },
                    { name: "Vista a las sierras" },
                  ]}
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  className={classes.input}
                  closeIcon={false}
                  filterSelectedOptions
                  onChange={(e, value, name, instance) => {
                    if (!instance) {
                      return;
                    }
                    setFieldValue("requisitos", [
                      ...values.requisitos,
                      instance.option,
                    ]);
                  }}
                  renderTags={(value) =>
                    values.requisitos.map((option, index) => {
                      return (
                        <Chip
                          variant="outlined"
                          key={option.name}
                          label={option.name}
                          onDelete={() => {
                            const nonDeleted = values.requisitos.filter(
                              (item) => item.name !== option.name
                            );
                            setFieldValue("requisitos", nonDeleted);
                          }}
                        />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Extra"
                      onBlur={handleBlur}
                      error={Boolean(touched.requisitos && errors.requisitos)}
                      helperText={touched.requisitos && errors.requisitos}
                    />
                  )}
                />
              </Grid>
              <Divider flexItem className={classes.divider} />

              <Grid xs={12} className={classes.input}>
                <input
                  style={{ display: "none" }}
                  ref={firstPhoto}
                  type="file"
                  onChange={async (e) => {
                    setLoading(true);
                    const photoUrl = await uploadPhoto(e.target.files[0]);
                    setLoading(false);

                    setFieldValue("fotoPrincipal", {
                      name: "Foto Principal Cargada exitosamente",
                      url: photoUrl,
                    });
                  }}
                />
                <Autocomplete
                  options={[]}
                  open={false}
                  popupIcon={<PublishIcon onClick={handleAttach} />}
                  closeIcon={false}
                  value={values.fotoPrincipal}
                  disabled={values.fotoPrincipal?.url}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option) => (
                    <li {...props}>{option.name}</li>
                  )}
                  renderInput={(params) =>
                    values.fotoPrincipal?.url ? (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Foto Principal"
                        InputProps={{
                          classes: {
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        placeholder="Clickear icono para subir Foto principal"
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.fotoPrincipal && errors.fotoPrincipal
                        )}
                        helperText={
                          touched.fotoPrincipal && errors.fotoPrincipal
                        }
                      />
                    ) : (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Foto Principal"
                        placeholder="Clickear icono para subir La foto que se vera en la tarjeta"
                        onBlur={handleBlur}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {loading ? (
                                <CircularProgress color="inherit" size={20} />
                              ) : null}
                              {params.InputProps.endAdornment}
                            </React.Fragment>
                          ),
                        }}
                        error={Boolean(
                          touched.fotoPrincipal && errors.fotoPrincipal
                        )}
                        helperText={
                          touched.fotoPrincipal && errors.fotoPrincipal
                        }
                      />
                    )
                  }
                />
              </Grid>
              <Divider flexItem className={classes.divider} />

              <Grid xs={12}>
                <Typography>Subi las fotos de la propiedad !</Typography>
              </Grid>

              <Grid xs={12} className={classes.photoSection}>
                <PhotoContainer
                  values={values}
                  classes={classes}
                  setFieldValue={setFieldValue}
                />
              </Grid>

              <FormControlLabel
                sx={{ ml: 1, mt: 3 }}
                control={
                  <GreenCheckbox
                    checked={values.subscription}
                    onChange={() => {
                      setFieldValue(
                        "alquilerTuristico",
                        !values.alquilerTuristico
                      );
                    }}
                    name="checkedG"
                  />
                }
                label="Disponible Alquiler Turistico"
              />
            </Grid>
            <Snackbar
              open={openNotification}
              autoHideDuration={3000}
              style={{ left: "70%", bottom: "20px" }}
              onClose={handleCloseNotification}
            >
              <SnackbarContent
                message={"Propiedad guardada con exito !"}
                className={classes.Snackbar}
              />
            </Snackbar>
            <Box sx={{ flex: 1 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress /> : "Guardar"}
              </Button>
            </Box>
          </Form>
        </Card>
      </Grid>
    </FormikProvider>
  );
};

export default NewHouse;
