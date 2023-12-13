export default function Maps(props) {
  return (
    <iframe
      width={props.width}
      height={props.height}
      frameborder="0"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCw0xfUmKSWBMgcOBENHnuR4SHd1gwI7uQ&q=Azel+Kule,Ankara+Türkiye"
      allowFullscreen
      className="brightness-75 mx-auto"
    />
  );
}
