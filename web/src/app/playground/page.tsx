import Chatroom from "./components/chatroom";
import Modelsetting from "./components/model-setting";

export default function Playground() {
  return (
    <div className="size-full flex flex-row">
      <Modelsetting />
      <div className="size-full flex justify-center">
        <div className="w-[95%] h-[96%]">
          <div className="h-full">
            <Chatroom />
          </div>
        </div>
      </div>
    </div>
  );
}
