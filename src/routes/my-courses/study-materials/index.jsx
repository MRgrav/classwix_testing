import { For } from "solid-js";
import { HiSolidDocument, HiSolidCloudArrowDown } from "solid-icons/hi";

const materials = [
  { id: 1, title: "SQL Basics Cheat Sheet", type: "PDF", size: "2.5 MB" },
  { id: 2, title: "Advanced Queries Examples", type: "PDF", size: "3.1 MB" },
  { id: 3, title: "Database Design Principles", type: "PDF", size: "1.8 MB" },
  { id: 4, title: "SQL for Data Analysis Guide", type: "PDF", size: "4.2 MB" },
];

function StudyMaterials() {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Study Materials</h1>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <For each={materials}>
          {(material) => (
            <div class="border-b last:border-b-0 p-4 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-4">
                  <HiSolidDocument class="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 class="font-semibold">{material.title}</h2>
                  <p class="text-sm text-gray-600">{material.type} • {material.size}</p>
                </div>
              </div>
              <button class="flex items-center bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
                <HiSolidCloudArrowDown class="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default StudyMaterials;

