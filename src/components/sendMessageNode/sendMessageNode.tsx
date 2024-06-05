import { Text } from "@mantine/core";
import { useNodeId } from "reactflow";
import { Handle, NodeProps, Position } from "reactflow";
import { BrandWhatsapp,BrandMessenger } from "tabler-icons-react";
import CustomHandle from "../customHandle/customHandle";
import styles from "./sendMessageNode.module.css";

//SendMessageNode is a custom node
const SendMessageNode = ({ data }: NodeProps) => {
  const nodeId = useNodeId();

  return (
    <>
      <Handle
        type="target"
        id={nodeId + "a"}
        position={Position.Left}
        isConnectable={true}
      />
      <div className={styles["send-message"]}>
        <div className={styles["send-message-header"]}>
          <BrandMessenger size={20} />
          <Text size={15}>Send Message</Text>
          <BrandWhatsapp color="white" size={20} />
        </div>
        <Text size={13} className={styles["send-message-label"]}>
          {data.label}
        </Text>
      </div>
      <CustomHandle
        id={nodeId + "b"}
        type="source"
        position={Position.Right}
        isConnectable={1}
      />
    </>
  );
};

export default SendMessageNode;
