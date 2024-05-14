import { motion } from "framer-motion";


export default function Badge({ caption }) {
  return <motion.span
   animate ={{scale: [1, 1.5, 1]}} 
   transition ={{ durtion:0.3}}
  className="badge"
  >
    {caption}
     </mption.span>;
}
