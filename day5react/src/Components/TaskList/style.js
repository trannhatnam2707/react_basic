import styled from 'styled-components';

export const WrapperTaskList = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const TaskUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

export const TaskText = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#999' : '#333')};
`;

export const EmptyMessage = styled.p`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  color: #888;
`;
