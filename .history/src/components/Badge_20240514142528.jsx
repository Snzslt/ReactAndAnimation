import { motion } from "framer-motion";


export default function Badge({ caption }) {
  return <motionspan className="badge">{caption}</span>;
}
