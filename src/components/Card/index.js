import Title from "./title"
import Card from "./card"
import Subtitle from "./subtitle"
import Header from "./header"
import Body from "./body"
import Footer from "./footer"
import Image from "./image"

export default rc.setStatic(
  "Title",
  Title,
  Card,
)

export {
  Title as CardTitle,
  Subtitle as CardSubtitle,
  Header as CardHeader,
  Body as CardBody,
  Footer as CardFooter,
  Image as CardImage,
}