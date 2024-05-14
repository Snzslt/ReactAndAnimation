import { motion } from "framer-motion";


export default function Badge({ caption }) {
  return <motion.span animate={{scale: [1]}} className="badge">{caption}</mption.span>;
}
