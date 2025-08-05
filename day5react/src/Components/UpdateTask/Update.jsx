import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/TaskContext'
import { EditOutlined } from '@ant-design/icons' 
import { Button, Input, Modal} from 'antd';

const Update = ({taskId, currentText}) => {
  
    const {UpdateTaskText} = useContext(TaskContext);

    // Hiển thị hoặc ẩn hộp thoại chỉnh sửa task
    //true: hiển thị, false: ẩn
    const [isModalVisible, setIsModalVisible] = useState(false);

    //update text lại
    const [newTaskText, setnewTaskText] = useState(currentText);
    
    // show hộp thoại
    const showModal = () => {
        setnewTaskText(currentText)
        setIsModalVisible(true);
    }

    // Ẩn hộp thoại
    const handleOk = () => {
        UpdateTaskText(taskId, newTaskText);
        setIsModalVisible(false)
    }

    // Hủy thì ẩn hộp thoại
    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <Button icon={<EditOutlined />} onClick={showModal} type='link'>Edit</Button>
            <Modal
                title="Update Task"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Update"
            >
            <Input
                value={newTaskText}
                onChange={(e) => setnewTaskText(e.target.value)}
                onPressEnter={handleOk} 
            />
            </Modal>
        </>
    )
    }

export default Update
