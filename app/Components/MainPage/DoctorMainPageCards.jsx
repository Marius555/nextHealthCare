
import PocketBase from 'pocketbase';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MainPageCardButtons from './MainPageCardButtons/MainPageCardButtons';
import { Avatar } from '@mui/material';
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainPageDialog from '../MainPageDialog/MainPageDialog';


const DoctorMainPageCards = async () => {
  const pb = new PocketBase('http://127.0.0.1:8090');

  let dataArray = []
  try {
    const data = await pb.collection('User').getList(1, 20, { filter: 'VartotojoTipas = "Doctor"', expand: "DoctorDetails(UserId), DoctorEducation(UserId)" })
    let modArray = [...data.items]

    modArray.map(async (item) => {
      if (item?.expand) {
        dataArray.push(item)
      }

    })
  } catch (err) {
    return err
  }

  return (
    <>
      <Box component="main" sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 30%))", justifyContent: "center", margin: "0.1rem", padding: "0.1rem", gap: "10px" }}>

        {dataArray?.map((item, index) => {
          let path = item?.expand
          let details = path?.['DoctorDetails(UserId)']?.[0]
          let education = path?.['DoctorEducation(UserId)']?.[0]
          let finalPath = `http://127.0.0.1:8090/api/files/${details?.collectionId}/${details?.id}/${details?.file}`

          return (
            <Card key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", position: "relative" }}>
              <Image
                src={finalPath}
                alt="Picture of the author"
                width={64}
                height={64}
                quality={100}
                priority
                style={{ objectFit: "cover", borderRadius: "50%", margin: "10px" }}
              />
              {/* <Avatar
                alt="Remy Sharp"
                src={finalPath}
                sx={{ width: 64, height: 64, justifySelf: "center", alignSelf: "center" , margin: "10px", objectFit: "cover"}}/> */}
              {/* <CardMedia component="img" image={finalPath} sx={{ width: 151, height: 200 }} alt="Photo" /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{position: "absolute", top: "10px", right: "2px"}}>
                  <MainPageDialog Name={details.Name} LastName={details.LastName}/>
                </Box>
                
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" sx={{ fontSize: { sm: 'h7', xs: 'h7', md: "body2", lg: "h5", xl: "h5"} }}>
                    {details.Name} {details.LastName}
                  </Typography>

                  <Typography color="text.secondary"  component="div" sx={{ typography: { sm: 'body1', xs: 'body2', md: "body1" } }}>
                    {education?.Specialization || "-"}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: "5px" }}>
                  <MainPageCardButtons />
                </Box>
              </Box>

            </Card>
          )
        })}
      </Box>
    </>

  )
}

export default DoctorMainPageCards
