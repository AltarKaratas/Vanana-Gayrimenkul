export default function Maps(props) {
  return (
    <iframe
      width={props.width}
      height={props.height}
      frameborder="0"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc7Fc7ctI0xQRlw8QRvcn6u4&key=AIzaSyCEe0_C2RZOIBGHjQg4uhvj9vq-uF1HTkU"
      allowFullScreen
      className="brightness-75 mx-auto border-4 border_black_100"
    />
  );
}
