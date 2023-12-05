// ----------------------------------------------------------------------
import { useState, useEffect } from 'react';
import { supabase } from 'src/supabase/supabaseClient';

// ----------------------------------------------------------------------
import { FaMicrochip } from 'react-icons/fa';
import { MdCompost, MdOutlineNearbyError } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';

import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

export default function AppView() {
  const [numCompostadores, setNumCompostadores] = useState(0);
  const [numCompostadoresInactivos, setNumCompostadoresInactivos] = useState(0);
  const [numCompostadoresEnReparacion, setNumCompostadoresEnReparacion] = useState(0);
  const [numEquipos, setNumEquipos] = useState(0);

  const [datosRecolectadosSemana, setDatosRecolectadosSemana] = useState([]);

  useEffect(() => {
    fetchComposteras();
    fetchEquipos();
    fetchCompostadoresEnReparacion();
    fetchCompostadoresInactivos();
    fetchDatosRecolectadosSemana();
    // Agrega más llamadas a funciones de recuento según sea necesario
  }, []);
  console.log(datosRecolectadosSemana);

  async function fetchComposteras() {
    try {
      const { data, error } = await supabase.from('compostadores').select('idcomp');

      if (error) {
        console.error('Error al obtener compostadores', error);
        return;
      }

      setNumCompostadores(data.length);
    } catch (error) {
      console.error('Error en la operación', error);
    }
  }
  async function fetchCompostadoresInactivos() {
    try {
      const { data, error } = await supabase
        .from('compostadores')
        .select('idcomp')
        .eq('estado', 'inactivo'); // Filtra por compostadores inactivos

      if (error) {
        console.error('Error al obtener compostadores inactivos', error);
        return;
      }

      setNumCompostadoresInactivos(data.length);
    } catch (error) {
      console.error('Error en la operación', error);
    }
  }
  console.log(numCompostadoresInactivos);
  async function fetchCompostadoresEnReparacion() {
    try {
      const { data, error } = await supabase
        .from('compostadores')
        .select('idcomp')
        .eq('estado', 'reparacion'); // Filtra por compostadores en reparación

      if (error) {
        console.error('Error al obtener compostadores en reparación', error);
        return;
      }

      setNumCompostadoresEnReparacion(data.length);
    } catch (error) {
      console.error('Error en la operación', error);
    }
  }

  async function fetchEquipos() {
    try {
      const { data, error } = await supabase.from('equipo').select('ideq');

      if (error) {
        console.error('Error al obtener equipos', error);
        return;
      }

      setNumEquipos(data.length);
    } catch (error) {
      console.error('Error en la operación', error);
    }
  }

  // -------------------------------------------------------------------------------------------
  async function fetchDatosRecolectadosSemana() {
    try {

      const { data, error } = await supabase.rpc('obtener_datos_ultimos_7_dias')


      
      if (error) {
        console.error('Error al obtener datos recolectados en el rango de tiempo', error);
        return;
      }
      
      // Aquí deberías procesar los datos según tus necesidades
      setDatosRecolectadosSemana(data);
    } catch (error) {
      console.error('Error en la operación', error);
    }
  }
console.log(datosRecolectadosSemana);

  function getFechasSemana(startOfWeek) {
    const fechasSemana = [];
    for (let i = 0; i < 7; i += 1) {
      const fecha = new Date(startOfWeek);
      fecha.setDate(startOfWeek.getDate() + i);
      fechasSemana.push(fecha.toISOString().split('T')[0]);
    }
    return fechasSemana;
  }

  const today = new Date();
  const startOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - ((today.getDay() + 6) % 7)
  );
  const fechasSemana = getFechasSemana(startOfWeek);
  // console.log('Fechas de la semana:', fechasSemana);

  const datosPorDia = {
    1: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Lunes
    2: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Martes
    3: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Miércoles
    4: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Jueves
    5: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Viernes
    6: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Sábado
    0: { temperaturaTotal: 0, humedadTotal: 0, count: 0 }, // Domingo
  };

  datosRecolectadosSemana.forEach((dato) => {
    const fecha = new Date(dato.fecha);
    const diaDeLaSemana = (fecha.getDay() + 6) % 7; // Ajuste para comenzar en lunes

    datosPorDia[diaDeLaSemana].temperaturaTotal += dato.temperatura;
    datosPorDia[diaDeLaSemana].humedadTotal += dato.humedad;
    datosPorDia[diaDeLaSemana].count += 1;
  });

  const promediosPorDia = {
    temperatura: Array.from({ length: 7 }, (_, index) => {
      const count = datosPorDia[index].count || 1;
      return datosPorDia[index].temperaturaTotal / count;
    }),
    humedad: Array.from({ length: 7 }, (_, index) => {
      const count = datosPorDia[index].count || 1;
      return datosPorDia[index].humedadTotal / count;
    }),
  };

  console.log(datosRecolectadosSemana);
  console.log(promediosPorDia);

  const fechasEspañol = [];
  const temperaturas = [];
  const humedades = [];

  datosRecolectadosSemana.forEach(({ fecha, temperatura, humedad }) => {
    const fechaObj = new Date(fecha);

    if (!Number.isNaN(fechaObj)) {
      // fechasEspañol.push(fechaObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
      fechasEspañol.push(fecha);
      temperaturas.push(temperatura);
      humedades.push(humedad);
    } else {
      console.error(`Fecha no válida: ${fecha}`);
    }
  });

  console.log('Fechas en Español:', fechasEspañol);
  console.log('Temperaturas:', temperaturas);
  console.log('Humedades:', humedades);

  // -------------------------------------------------------------------------------------------

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hola, bienvenido de nuevo 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid key={1} xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Cantidad de equipos"
            total={numEquipos !== null ? numEquipos : '0'}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            icon={<FaMicrochip size={50} color="black" />}
          />
        </Grid>
        <Grid key={2} xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Cantidad de composteras"
            total={numCompostadores !== null ? numCompostadores : '0'}
            color="success"
            icon={<MdCompost size={50} color="green" />}
          />
        </Grid>

        <Grid key={3} xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Composteras en reparacion"
            total={numCompostadoresEnReparacion == null ? numCompostadoresEnReparacion : '0'}
            color="success"
            icon={<GiAutoRepair size={50} color="blue" />}
          />
        </Grid>
        <Grid key={4} xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Composteras inactivas"
            total={numCompostadoresInactivos != null ? numCompostadoresInactivos : '0'}
            color="success"
            icon={<MdOutlineNearbyError size={50} color="red" />}
          />
        </Grid>

        {/* asta aqui las cards */}

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Temperatura semanal"
            subheader="ultimos 7 dias"
            chart={{
              labels: fechasEspañol,
              series: [
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'gradient',
                //   data: temperaturas,
                // },
                {
                  name: 'Humedad',
                  type: 'area',
                  fill: 'gradient',
                  data: humedades,
                },
                {
                  name: 'Temperatura',
                  type: 'area',
                  fill: 'gradient',
                  data: temperaturas,
                },
              ],
            }}
          />
        </Grid>
        {console.log(fechasSemana)}
        {console.log(temperaturas)}
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Medición Semanal"
            chart={{
              categories: fechasSemana,
              series: [
                { name: 'Temperatura', data: promediosPorDia.temperatura },
                { name: 'Humedad', data: promediosPorDia.humedad },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
