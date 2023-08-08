import { useNotification } from "src/hooks/useNotification";

export const FileManage = () => {
  const { addNotification } = useNotification();
  return (
    <>
      <button
        onClick={() => {
          addNotification({ message: "dasdas", type: "error" });
        }}
      >
        file manage
      </button>
    </>
  );
};
