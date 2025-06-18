import { ChatMessageModel } from "@/models/chat-message-model";

function generateMarkdown(): string {
  return `
# Sample Markdown Document

## Key Features
- **Bullet Points**: Organized list for clarity
- **Bold Text**: Emphasize important information
- **Table**: Structured data presentation
- **Python Code**: Example code snippet
- **ECharts**: Data visualization configuration

## Data Overview
| Name       | Role           | Years of Experience |
|------------|----------------|---------------------|
| **Alice**  | Developer      | 5                   |
| **Bob**    | Designer       | 3                   |
| **Charlie**| Manager        | 8                   |

## Python Code Example
\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))
\`\`\`

## ECharts Option Example
\`\`\`echart
{
  "title": {
    "text": "Team Experience Chart",
    "left": "center"
  },
  "xAxis": {
    "type": "category",
    "data": ["Alice", "Bob", "Charlie"]
  },
  "yAxis": {
    "type": "value",
    "name": "Years of Experience"
  },
  "series": [
    {
      "data": [5, 3, 8],
      "type": "bar",
      "itemStyle": {
        "color": "#1890ff"
      }
    }
  ]
}
\`\`\`
  `;
}

export const MarkdownSample: ChatMessageModel[] = [
  {
    id: "ads",
    createdAt: new Date(),
    content: generateMarkdown(),
    role: "assistant",
  },
];
