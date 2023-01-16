import { Box } from "@mui/material";
import { styled } from "@mui/system";



const NavBarContainer = styled(Box)(({bg})=>({
  height:"100px",
  display:"flex",
  alignItems:"center",
  padding:'0 50px',
  backgroundColor:bg
}))

const PizzaListContainer = styled(Box)(()=>({
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  padding:'30px 50px',
}))

const StatusContainer = styled(Box)(({status})=>({
    "@keyframes inProgress" :{
        from :{
          opacity: 0
        },
        to:{
          opacity: 1,
        }
    },
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    animation: status === "inProgress"? "inProgress 1s ease infinite alternate":"none",
    opacity: status === "undone"? "0.3":"none"
}))


export {
    NavBarContainer,
    PizzaListContainer,
    StatusContainer
}