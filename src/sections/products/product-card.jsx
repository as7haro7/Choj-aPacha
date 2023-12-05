import { useState, useEffect } from 'react';
import * as React from 'react';
import { supabase } from 'src/supabase/supabaseClient';
import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'src/routes/hooks';
import { fCurrency } from 'src/utils/format-number';
import { VscError } from "react-icons/vsc";
import { MdHomeRepairService } from "react-icons/md";
import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';
import Grid from '@mui/material/Grid';
// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 820,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
export default function ShopProductCard({ compostadores, id }) {
  const [comp, setCompostera] = useState([]);
  useEffect(() => {
    getCompostador(id);
  }, [id]);

  async function getCompostador(ide) {
    const { data} = await supabase.from('compostadores')
    .select()
    .eq('idcomp', ide)
    .maybeSingle();
    setCompostera(data);
  }
  console.log(comp);
  // const res = comp.find(compostador => compostador.idcomp === id);





  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const datoAEnviar = compostadores.idcomp;
  // const handleClick = () => {
  //   router.push('/compostera', { datoAEnviar });
  //   // router.push('/compostera');
  // };
  const handleClick = () => {
    router.push(`/compostera/${datoAEnviar}`); // Pass data as an object
  };
// Función para calcular el estilo dinámicamente

// const getColor = (estado, tipo) => {
//   switch (estado) {
//     case "activo":
//       if (tipo === "bajo") {
//         return "rgba(0, 131, 255, 0.37)";
//       } 
//       if (tipo === "normal") {
//         return "rgba(140, 247, 100, 0.3)";
//       } 
//       if (tipo === "alto") {
//         return "rgba(255, 99, 71, 0.5)";
//       } 
//         return "rgba(255, 165, 0, 0.37)";
      
//     case "inactivo":
//       return "rgba(188, 188, 188, 0.5)";
//     default:
//       return "rgba(255, 255, 255, 0.5)";
//   }
// };

const getColor = (estado, humedad) => {
  switch (estado) {
    case "activo":
      if (humedad < 45 ) {
        return "rgba(0, 131, 255, 0.37)";
      } 
      if (humedad >= 45 && humedad <= 60) {
        return "rgba(140, 247, 100, 0.3)";
      } 
      if (humedad > 60) {
        return "rgba(255, 99, 71, 0.5)";
      } 
        return "rgba(255, 165, 0, 0.37)";
      
    case "inactivo":
      return "rgba(188, 188, 188, 0.5)";
    default:
      return "rgba(255, 255, 255, 0.5)";
  }
};
const calcularEstiloDinamico = () => {
  const color = getColor(comp.estado,compostadores.humedad);

  return {
    backgroundColor: color,
    boxShadow: `5px 9px 99px -7px ${color}`,
  };
};

const getIcono = (estado) => {
  switch (estado) {
    case "activo":
      return <FaCheck color='green'  size={25}/>;
    case "reparacion":
      return <MdHomeRepairService color='blue'  size={25}/>;
    case "inactivo":
      return <VscError  color='red' size={25} />;
    default:
      return <FaCheck />;
  }
};

const calcularicono = () => {
  const icono = getIcono(comp.estado);
  return {
    icon: icono,
  };
};


  return (
    <Card  sx={ calcularEstiloDinamico() }>
      <CardContent>
        <Typography variant="h4" component="div">
          Compostera n° {compostadores.idcomp}{' '}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperatura:
        </Typography>
        <Typography variant="h5" component="div" align="center">
          {compostadores.temperatura} °C
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Humedad
        </Typography>
        <Typography variant="h5" component="div" align="center">
          {compostadores.humedad} %
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Estado
        </Typography>
        <Typography variant="h5" component="div" align="center">
         {/* {comp.estado} <FaCheck color='green' /> */}
        {getIcono(comp.estado)} {comp.estado} 
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Button size="small" color="secondary" onClick={handleClick}>
            Mas detalles de Compostera {compostadores.idcomp}
          </Button>        
        </Grid>
      </CardActions>
    </Card>
  );
}

ShopProductCard.propTypes = {
  compostadores: PropTypes.object,
  id: PropTypes.any.isRequired,
};
