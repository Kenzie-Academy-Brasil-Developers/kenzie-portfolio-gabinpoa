import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";
import { motion } from "framer-motion";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
}

export const Stack = (
  { title, icon: Icon }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <motion.div>
      <StackCard key={key}>
        <Text>{title}</Text>
        {isString ? (
          <img
            src={Icon}
            alt={title}
            title={title}
            height="84px"
            width="84px"
          />
        ) : (
          <Icon size={84} />
        )}
      </StackCard>
    </motion.div>
  );
};
