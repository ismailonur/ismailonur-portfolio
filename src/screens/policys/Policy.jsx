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
                        <strong>
                            EN: The application does not collect or use any user data.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            TR: Ethereum Gas Gwei Tracker uygulaması herhangi bir kullanıcı verisi toplamaz veya kullanmaz.
                        </strong>
                    </p>
                </>
            }
            {
                title === 'biometric' &&
                <>
                    <h1>Biometric Password Protection <br /> Privacy Policy</h1>
                    <p>
                        <strong>
                            EN: A profile is opened for you with the e-mail address you registered in the system. We store this information in the database so that you can access this profile later.
                            The passwords you create are completely randomly generated inside the phone.
                            We encrypt the passwords you register with a key created on your device and only available on your device, and send them to our database.
                            Since your passwords are encrypted with the key on your device, even we cannot see your passwords. Your passwords are completely safe unless you get the key on your device.
                            By using the application, you accept them.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            TR: Sisteme kayıt olduğunuz e mail adresi ile size bir profil açılıyor. Daha sonra bu profile erişmek isteyebilmeniz için bu bilgileri databasede saklıyoruz.
                            Oluşturduğunuz şifreler tamamen rastgele bir şekilde telefon içinde oluşturuluyor.
                            Kayıt attiğiniz şifreler ise yine cihazınızda oluşturulan ve sadece cihazınızda bulunan bir anahtar ile şifreleyip databaseimize gönderiyoruz.
                            Şifrelerinizi cihazınızdaki key ile şifrelendiği için biz bile şifrelerinizi göremiyoruz. Cihazınızda bulunan keyi ele geçirmediğiniz takdirde şifreleriniz tamamen güvendedir.
                            Ugulamayı kullanırken bunları kabul etmiş olurusunuz.
                        </strong>
                    </p>
                </>
            }
            {
                title === 'twas' &&
                <>
                    <h1>TWAS <br /> Privacy Policy</h1>
                    <p>
                        <strong>
                            EN: TWAS is an online note taking application developed by Friday Team.
                            Since it is online, it provides ease of access to your notes whenever you want, with any mobile device.
                            The main purpose of the application is that people need to take notes on something they always have with them so that they do not forget what they are going to do. This is where TWAS comes into play.
                            Thanks to TWAS, you can take notes easily and quickly, and even if something happens to your phone, your notes are securely stored with the cloud storage service, so you can see your notes again with another device whenever you want.
                            By using the application, you consent to the storage of your data for later access.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            TR: TWAS, Friday Team tarafından geliştirilen online bir not alma uygulamasıdır.
                            Online olduğu için de notlarınıza istediğiniz zaman, istediğiniz mobil cihaz ile erişim kolaylığı sağlıyor.
                            Uygulamanın temel amacı insanların yapacakları işi unutmamaları için her an yanlarında bulunan bir şeye not almaları gerekiyor işte burada TWAS devreye giriyor.
                            TWAS sayesinde kolaylıkla ve hızlıca not alabiliyorsunuz, ayrıca telefonunuzun başına bir şey gelse dahi notlarınızı bulut depolama hizmeti ile güvenli bir şekilde depolandığı için istediğiniz zaman başka bir cihaz ile notlarınızı tekrar görebiliyorsunuz.
                            Uygulamayı kullanırken verilerinizin daha sonra erişilebilmesi için depolanmasına izin vermiş olursunuz.
                        </strong>
                    </p>
                </>
            }
            {
                title === 'stickers' &&
                <>
                    <h1>Stickers for WhatsApp (WAStickers)<br /> Privacy Policy</h1>
                    <p>
                        <strong>
                            EN: The application does not collect or use any user data.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            TR: Stickers for WhatsApp (WAStickers) uygulaması herhangi bir kullanıcı verisi toplamaz veya kullanmaz.
                        </strong>
                    </p>
                </>
            }
            {
                title === 'animals_stickers' &&
                <>
                    <h1>Happy Animalls Sticker for WhatsApp (WAStickers)<br /> Privacy Policy</h1>
                    <p>
                        <strong>
                            EN: The application does not collect or use any user data.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            TR: Happy Animalls Sticker for WhatsApp (WAStickers) uygulaması herhangi bir kullanıcı verisi toplamaz veya kullanmaz.
                        </strong>
                    </p>
                </>
            }
        </div>
    )
}

export { Policy }