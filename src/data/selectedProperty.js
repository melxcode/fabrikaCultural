import HomeWorkIcon from "@material-ui/icons/HomeWork";
import StarBorder from "@material-ui/icons/StarBorder";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import MemoryIcon from "@material-ui/icons/Memory";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { formatMoney, removeCamelCase } from "../utils/format";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import BathtubIcon from "@material-ui/icons/Bathtub";

export const propertyData = (selectedProperty) => {
  const propertyData = {
    generales: [
      {
        label: "Tipo de propiedad",
        value: `${removeCamelCase(selectedProperty.tipoDePropiedad)}`,
        icon: <HomeWorkIcon style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Valor",
        value: `${selectedProperty.moneda === "dolares" ? "USD " : "$ "}
        ${formatMoney(selectedProperty.precio)}`,
        icon: <AttachMoneyIcon style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Disponible para alquiler Turistico",
        value: `${selectedProperty.alquilerTuristico ? "Si" : "No"}`,
        icon: <StarBorder style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Direccion",
        value: removeCamelCase(selectedProperty.direccion),
        icon: <ContactMailIcon style={{ color: "#5CA9FB" }} />,
      },
    ],
    detalles: [
      {
        label: "Metros",
        value: `${selectedProperty.metros} m²`,
        icon: <MemoryIcon style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Metros Cubiertos",
        value: `${selectedProperty.metrosCubiertos} m²`,
        icon: <StorefrontIcon style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Ambientes",
        value: selectedProperty.ambientes,
        icon: <MeetingRoomIcon style={{ color: "#5CA9FB" }} />,
      },
      {
        label: "Sanitarios",
        value: selectedProperty.sanitarios,
        icon: <BathtubIcon style={{ color: "#5CA9FB" }} />,
      },
    ],
  };

  return propertyData;
};
