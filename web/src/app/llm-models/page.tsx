import SearchBar from "@/components/bases/search-bar";
import ModelBlocks from "./components/model-blocks";
import { llmModelSamples } from "@/constants/llm-models";
import { LLMModelsModel } from "@/models/llm-models-model";

export default function Models() {
  const llmModels = llmModelSamples;
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[97%] h-[95%] flex flex-col gap-5">
        <SearchBar searchInput="hello" />
        <div className="size-full flex flex-row gap-5 flex-wrap overflow-y-scroll">
          {llmModels.map((llmModel: LLMModelsModel) => {
            return <ModelBlocks key={llmModel.id} llmModel={llmModel} />;
          })}
        </div>
      </div>
    </div>
  );
}
