import { Button, message, Popconfirm } from 'antd';
import React, { useContext } from 'react'
import { TaskContext } from '../../Context/TaskContext';

const DeleteAllTask = () => {

    const { DeleteAll, tasks } = useContext(TaskContext);

    if(tasks.length === 0 ) return null;
  return (
    <Popconfirm
    title=" Bạn có chắc muốn xóa tất cả các task không ? "
    onConfirm = {() => {
        DeleteAll()
        message.success("Đã xóa tất cả các task");
    }}
    okText="Xóa"
    cancelText="Hủy"
    >
    <Button danger type="primary" style={{marginTop:'20px'}}>
        Xóa tất cả
    </Button>
    </Popconfirm>
  )
}

export default DeleteAllTask