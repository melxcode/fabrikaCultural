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
        icon: <HomeWorkIcon />,
      },
      {
        label: "Valor",
        value: `${selectedProperty.moneda === "dolares" ? "USD " : "$ "}
        ${formatMoney(selectedProperty.precio)}`,
        icon: <AttachMoneyIcon />,
      },
      {
        label: "Disponible para alquiler Turistico",
        value: `${selectedProperty.alquilerTuristico ? "Si" : "No"}`,
        icon: <StarBorder />,
      },
      {
        label: "Direccion",
        value: removeCamelCase(selectedProperty.direccion),
        icon: <ContactMailIcon />,
      },
    ],
    detalles: [
      {
        label: "Metros",
        value: `${selectedProperty.metros} m²`,
        icon: <MemoryIcon />,
      },
      {
        label: "Metros Cubiertos",
        value: `${selectedProperty.metrosCubiertos} m²`,
        icon: <StorefrontIcon />,
      },
      {
        label: "Ambientes",
        value: selectedProperty.ambientes,
        icon: <MeetingRoomIcon />,
      },
      {
        label: "Sanitarios",
        value: selectedProperty.sanitarios,
        icon: <BathtubIcon />,
      },
    ],
  };

  return propertyData;
};
