import React from "react";
import "../css/PrivacyPolicy.css"

function DictionaryApp() {
    return (
        <div>
            <br/>
            <br/>
            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Điều khoản sử dụng</span>
            <br/><br/><br/>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', paddingLeft: '20px'}}>1. GIỚI THIỆU</p>

            <p style={{textAlign: 'left' , paddingLeft: '20px'}}>Ứng dụng ZDictionary là ứng dụng từ điển kết hợp với việc học qua flashcard, trò chơi nhằm tăng hiệu quả học tiếng anh cho người dùng.</p>
        
            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', paddingLeft: '20px'}}>2. ZDictionary sẽ thu thập những dữ liệu gì?</p>

            <p style={{textAlign: 'left', paddingLeft: '20px'}}>Ứng dụng hoàn toàn không thu thập dữ liệu cá nhân người dùng.</p>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' , paddingLeft: '20px'}}>3. THẮC MẮC, QUAN NGẠI HOẶC KHIẾU NẠI?</p>

            <p style={{textAlign: 'left', paddingLeft: '20px'}}>Liên hệ với tôi qua email: <a href="mailto:thuyetngocluong.working@gmail.com">thuyetngocluong.working@gmail.com</a></p>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '15px' , paddingLeft: '20px'}}>Lần cập nhật cuối 04/12/2022</p>
        </div>
       
    );
}

export default DictionaryApp;