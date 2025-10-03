//src/components/Card.tsx

import './Card.css';



// 定義卡片的資料格式
export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  imageInfo: string;
}

// 定義 Card 組件的 Props 類型
export interface CardProps {
  data: Card; // 接收一個 Card 物件
}

// 撰寫組件
export default function CardComponent(props: CardProps) {
  const { data } = props;

  return (
    <div className="card-container">
      <div className="card">
        {/* 圖片 */}
        <img
          src={data.image}
          alt={data.imageInfo || "圖片說明"}
          width={300}
          height={200}
          className="card-image"

        />
        {/* 內容 */}
        <div className="card-content">
          <h3 className="card-title">{data.title}</h3>
          <p className="card-description">{data.description}</p>
        </div>

      </div>
    </div>
  );
}
