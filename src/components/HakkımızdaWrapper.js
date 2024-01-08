"use client"
import useScreenSize from "@/utils/hooks/useScreenSize";
import HakkimizdaContainerDesktop from "@/components/HakkimizdaContainerDesktop";
import HakkimizdaContainer from "@/components/HakkimizdaContainer";


export default function HakkımızdaWrapper() {
   
const screenSize = useScreenSize();    

  return (
    <>
      {" "}
      {screenSize.width < 1024 ? (
        <div className="flex flex-col gap-20 w-full pt-20 pb-40  2xl:gap-40 lg:py-40 2xl:pb-60">
          <HakkimizdaContainer
            h1="Büyük İş"
            h1_side="Büyük Planlama"
            image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaPlan.webp"
            p1="İnşaat projelerinin başlangıcında size mülklerinizi tanıtmak,
                pazarlamak ve satışını gerçekleştirmek için size rehberlik
                ediyoruz. Ayrıca, müşteri memnuniyetini en üst düzeye çıkarmak
                için satış sonrası destek sağlıyoruz."
            p2="Projenize isim bulunması, satış ofisinin oluşturulması, örnek
                daire planı yapılması gibi detayları sizin için düşünüyoruz. Ayrıca personel eğitimi ve yönetimi yükünü omuzlarınızdan kaldırıyoruz."
          />
          <HakkimizdaContainer
            h1="Reklam"
            h1_side="ve Tanıtım"
            image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaBillboard.webp"
            p1="Ankara`da bulunan emlak satış danışmanlık firması olarak, geniş bir portföyü
            kapsayan mülklerin satışında uzmanız. Etkin pazarlama ile
            mülklerinizin hedef müşteriye ulaşmasını sağlıyoruz."
            p2="Yetkin reklam ajanslarıyla çalışarak sosyal medya ve
            billboardlar gibi araçlar ile müşterilerinize hitap
            ediyoruz. İnşaat projenize özel broşür ve görsel hazırlayarak
            projelerinizi destekliyoruz. İnternet ilanlarında projelerinizi
            öne çıkararak satışta ivme yakalıyoruz."
          />
          <HakkimizdaContainer
            h1="Müşteri"
            h1_side="Yönetimi"
            image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaHandshake.webp"
            p1="Müşterilerinize en üst düzeyde hizmet sunma taahhüdümüzün bir
            parçası olarak, her müşterinize özel ilgi gösteriyor ve
            ihtiyaçlarına duyarlı bir şekilde yaklaşıyoruz."
            p2="Müşterinin karşılanmasından, daire teslimine kadar, her konunun
            üzerinde özenle duruyoruz. Gelecek projelerinizi benzer
            yatırımcı müşterilerimize duyuruyoruz. Proje mimar ve mühendislerinden bilgi alarak müşterilerinize doğru ve yerinde bilgilendirme sağlıyoruz."
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-20 2xl:gap-40 lg:py-40 2xl:pb-60">
            <HakkimizdaContainerDesktop
              direction={"right"}
              h1="Büyük İş"
              h1_side="Büyük Planlama"
              image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaPlan.webp"
              p1="İnşaat projelerinin başlangıcında size mülklerinizi tanıtmak,
                pazarlamak ve satışını gerçekleştirmek için size rehberlik
                ediyoruz. Ayrıca, müşteri memnuniyetini en üst düzeye çıkarmak
                için satış sonrası destek sağlıyoruz."
              p2="Projenize isim bulunması, satış ofisinin oluşturulması, örnek
              daire planı yapılması gibi detayları sizin için düşünüyoruz. Ayrıca personel eğitim ve yönetimi yükünü omuzlarınızdan kaldırıyoruz."
            />
            <HakkimizdaContainerDesktop
              h1="Reklam"
              h1_side="ve Tanıtım"
              image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaBillboard.webp"
              p1="Ankara`da bulunan emlak danışmanlık firması olarak, geniş bir portföyü
            kapsayan mülklerin satışında uzmanız. Etkin pazarlama ile
            mülklerinizin hedef müşteriye ulaşmasını sağlıyoruz."
              p2="Yetkin reklam ajanslarıyla çalışarak sosyal medya ve
            billboardlar gibi araçlar ile müşterilerinize hitap
            ediyoruz. İnşaat projenize özel broşür, görsel hazırlayarak
            projelerinizi destekliyoruz . İnternet ilanlarında projelerinizi
            öne çıkararak satışta ivme yakalıyoruz."
            />
            <HakkimizdaContainerDesktop
              direction="right"
              h1="Müşteri"
              h1_side="Yönetimi"
              image="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaHandshake.webp"
              p1="Müşterilerinize en üst düzeyde hizmet sunma taahhüdümüzün bir
            parçası olarak, her müşterinize özel ilgi gösteriyor ve
            ihtiyaçlarına duyarlı bir şekilde yaklaşıyoruz."
            p2="Müşterinin karşılanmasından, daire teslimine kadar, her konunun
            üzerinde özenle duruyoruz. Gelecek projelerinizi benzer
            yatırımcı müşterilerimize duyuruyoruz. Proje mimar ve mühendislerinden bilgi alarak müşterilerinize doğru ve yerinde bilgilendirme sağlıyoruz."
            />
          </div>
        </>
      )}
    </>
  );
}
