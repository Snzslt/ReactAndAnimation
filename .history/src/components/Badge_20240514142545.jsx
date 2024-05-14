import { motion } from "framer-motion";


export default function Badge({ caption }) {
  return <motion.span animate={{scale: []}} className="badge">{caption}</mption.span>;
}
