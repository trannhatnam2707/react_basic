import { WrapperDetail, Title, Content, Highlight, Image } from './style';

const Detail = () => {
  return (
    <WrapperDetail>
      <Title>Trí tuệ nhân tạo (AI) đang thay đổi thế giới như thế nào?</Title>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFzpbIaqTGqd7my4s2wWynbtURclvh8SIRyZXnI58RABllgRrB2F8KoRGGLthAgPgbY8&usqp=CAU" alt="AI" />
      <Content>
        <p>
          Trong thập kỷ qua, <Highlight>trí tuệ nhân tạo (AI)</Highlight> đã có những bước phát triển vượt bậc,
          từ việc xử lý ngôn ngữ tự nhiên đến khả năng tự học và đưa ra quyết định.
        </p>
        <p>
          Các lĩnh vực như chăm sóc sức khỏe, tài chính, giáo dục và cả nghệ thuật đang dần được tự động hóa nhờ AI.
          Với khả năng phân tích dữ liệu khổng lồ trong thời gian thực, AI giúp con người đưa ra quyết định
          nhanh chóng và chính xác hơn.
        </p>
        <p>
          Tuy nhiên, AI cũng đặt ra nhiều thách thức như <Highlight>vấn đề đạo đức</Highlight>, sự phụ thuộc vào công nghệ,
          và nguy cơ mất việc làm hàng loạt nếu không có sự chuẩn bị thích đáng.
        </p>
      </Content>
    </WrapperDetail>
  );
};

export default Detail;
