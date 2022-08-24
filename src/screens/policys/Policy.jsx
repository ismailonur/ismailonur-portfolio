import React from 'react'
import './policy.css'

const Policy = ({ title }) => {
    return (
        <div className='policy_container' >
            {
                title === 'ethereum' &&
                <>
                    <h1>Ethereum Gas Gwei Tracker <br /> Privacy Policy</h1>
                    <p>
                        <strong>EN: The application does not collect or use any user data.</strong>
                    </p>
                    <p>
                        <strong>TR: Ethereum Gas Gwei Tracker uygulaması herhangi bir kullanıcı verisi toplamaz veya kullanmaz.</strong>
                    </p>
                </>
            }
            {
                title === 'biometric' &&
                <>
                    <h1>Biometric Password Protection <br /> Privacy Policy</h1>
                    <p>
                        <strong>EN: A profile is opened for you with the e-mail address you registered in the system. We store this information in the database so that you can access this profile later. The passwords you create are completely randomly generated inside the phone. We encrypt the passwords you register with a key created on your device and only available on your device, and send them to our database. Since your passwords are encrypted with the key on your device, even we cannot see your passwords. Your passwords are completely safe unless you get the key on your device. By using the application, you accept them.</strong>
                    </p>
                    <p>
                        <strong>TR: Sisteme kayıt olduğunuz e mail adresi ile size bir profil açılıyor. Daha sonra bu profile erişmek isteyebilmeniz için bu bilgileri databasede saklıyoruz. Oluşturduğunuz şifreler tamamen rastgele bir şekilde telefon içinde oluşturuluyor. Kayıt attiğiniz şifreler ise yine cihazınızda oluşturulan ve sadece cihazınızda bulunan bir anahtar ile şifreleyip databaseimize gönderiyoruz. Şifrelerinizi cihazınızdaki key ile şifrelendiği için biz bile şifrelerinizi göremiyoruz. Cihazınızda bulunan keyi ele geçirmediğiniz takdirde şifreleriniz tamamen güvendedir. Ugulamayı kullanırken bunları kabul etmiş olurusunuz.</strong>
                    </p>
                </>
            }
        </div>
    )
}

export { Policy }