import { useState, useEffect } from 'react';
import { supabase } from 'src/supabase/supabaseClient';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import ProductCard from '../product-card';


// ----------------------------------------------------------------------

export default function ProductsView() {
  const [comp_dato_rec, setCompostadores] = useState([]);
  useEffect(() => {
    fetchCompostadores();
    const channel = supabase
      .channel("datos_recolectados")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
        },
        (payload) => {console.log(payload)
          fetchCompostadores();
      }
      )
      .subscribe();

    return () => channel.unsubscribe(); 
  }, []);

  async function fetchCompostadores() {
    try {
      const { data } = await supabase.rpc('obtener_datos_recolectados') ;   
      // const { data } = await supabase.rpc('obtener_datos_recolectados').eq("idcomp",1) ;   
      setCompostadores(data);
    } catch (error) {
      console.error('Error en la operación:', error.message);
    }
  }  

  console.log(comp_dato_rec);
  
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        COMPOSTERAS
      </Typography>    

      <Grid container spacing={3}>      
        {comp_dato_rec.map((compostera) => (
          
          <Grid key={compostera.iddat} xs={12} sm={6} md={6}>
            <ProductCard compostadores={compostera} id={compostera.idcomp} />
          </Grid>
        ))}
      </Grid>

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
