import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export const Mycard1:React.FC<{}>=()=> {
  return (
    <div style={{ display: 'flex', gap: '1px', height:'200px' }}>

<Card sx={{margin:1,maxWidth: 190 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
          Grocery
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
          Mobiles
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
          Fashion
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
        Electronics
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
         Home & Furniture 
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
          Appliances 
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
          Travel
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
         Beauty, Toys & More
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{margin:1,maxWidth: 180 }}>
      <CardMedia
        component="img"
        height="125"
        image="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.black">
         Two Wheelers
        </Typography>
      </CardContent>
     
    </Card>
    </div>
   
    
  );
}



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export const Mycard1: React.FC<{}> = () => {
//   const cardData = [
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100',
//       title: 'Grocery',
//     //   description: 'Description 1',
//     },
//     // Add more card data objects here for the remaining cards
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100',
//       title: 'Mobiles',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100',
//       title: 'Fashion',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100',
//       title: 'Electronics',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100',
//       title: 'Home & Furniture',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100',
//       title: 'Appliances',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100',
//       title: 'Travel',
//     },
//     {
//       image: 'https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100',
//       title: 'Beauty, Toys & More',
//     },
//     {
//         image: 'https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100',
//         title:'Two Wheelers',
//     }
//   ];

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

//       {/* Render additional cards */}
//       {cardData.map((card, index) => (
//         <Card key={index} sx={{margin:'6px', maxWidth: 120 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="100"
//               image={card.image}
//               alt="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {/* {card.description} */}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}
//     </div>
//   );
// };
