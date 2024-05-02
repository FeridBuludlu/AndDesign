import React from 'react';
import { Card, Space } from 'antd';
import '../Card/Card.css'

const Cards = () => (
  <Space className='main-card'>
    <Card className='card'
      style={{
        width: '350px',
      }}
    >
      <img src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png" alt="" />
      <h2>Bir pəncərədən biznesə giriş</h2>
      <p>Məhsulların ödəniş, hesablaşma və mühasibat uçotunun səmərəliliyi dörd dəfə artır</p>
    </Card>
    <Card className='card'
      style={{
        width: "350px",
      }}
    >
      <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="" />
      <h2>Hadisələr zamanı risklərin monitorinqi</h2>
      <p>Bütün tələb konfiqurasiya bağlantılarında əvvəlki risk nəzarəti və keyfiyyətə nəzarət imkanları</p>
    </Card>
    <Card className='card'
      style={{
        width: '350px',
      }}
    >
      <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="" />
      <h2>Bir pəncərədə məlumat əməliyyatı</h2>
      <p>Məhsula giriş səmərəliliyi və əməliyyat ofisiant işinin səmərəliliyi məlumatlarını çökdürün</p>
    </Card>
  </Space>
);
export default Cards;


