import * as motion from "motion/react-client"
import  image from "../../../assets/images/crochet_image_4.jfif"

export default function HeroImage() {
    return (
        <motion.img
            src={image}
            alt="Hero image"
            style={imageStyle}
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
        />
    )
}


const imageStyle = {
    width: 300,
    height: 300,
    objectFit: "cover",
    borderRadius: 20,
}
