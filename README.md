# Proyecto Restaurant
## Links del Proyecto
### Como acceder al Sitio:
Para acceder al sitio se hace mediante el siguiente link de acceso:
https://645c6c5afee4d54e22bbf098--restaurante-react-apl.netlify.app/

### Repositorio:
El repositorio se encuentra en la siguiente dirección:
https://github.com/Jesus-007-cmd/restaurante-react-apl

## Sitio Inicial
Desde este apartado es como inicia nuestro SPA, se puede ajustar el zoom con ctrl y ruedita del mouse para hacer mas grande ventana de tipos de pedidos y así realizar un pedido con una vista más comoda.
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/2e63f310-3345-429f-9c57-f9e0dbb0c2cc)
Como se puede observar desde que se ingresa nos aparece un modal con 3 opciones para ordenar.
En el fondo se muestra un carrusel de imágenes de algunas comidas que ofrece al restaurante. 
En nuestro encabezado tenemos 3 opciones, las cuales son tipo de pedido, iniciar sesión y registrarse.
Si se cierra el modal presionando el botón cerrar en la parte inferior de la página se puede ver el footer:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/2601560b-f9e4-4457-8895-d73a51faaa97)


## ¿Cómo hacer un pedido?
Un pedido se puede hacer inmediatamente desde que se inicia al sitio, se requiere elegir 1 de las 3 opciones siguientes:
Entrega a domicilio.
Recoger en tienda.
Reservar mesa.

## Entrega a domicilio
En esta opción es importante aceptar ubicación ya que permitirá a nuestro servicio de entregas una manera más optima de acudir con tú pedido. Solo es necesario pulsar el botón de obtener ubicación y dar permisos de ubicación:
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/1d8ed484-5d70-44b3-9966-b6b29317e186)
 
Una vez realizados los permisos se mostrará tú ubicación en la ventana:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/38d13664-e93a-4809-8674-8c7d1aba6788)

Una vez estar conforme con dicha opción hay que elegir realizar pedido y de ahí te mandara al menú de nuestra comida que se explicará más adelante en este tutorial ya que primero se explicaran las 3 opciones de compra de nuestra comida.

## Recoger en tienda.
En esta opción podrás acudir a nuestra sucursal, en este caso y a manera de ejemplo se mostrará solo una, ya si este sistema funciona futuramente se podrían agregar las sucursales más cercanas a tú ubicación:
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/84197c4e-3376-4e65-b3cf-9e5404fd3945)
 
Como se puede observar aparece la dirección y un aviso del tiempo de duración del pedido, solo hay que presionar el botón hacer pedido para ir al menú, que es el mismo si se eligió entrega a domicilio y se vuelve a comentar que se explicará más adelante.

## Reservar mesa.
Nuestra ultima opción para comprar comida es la de comer en el restaurant. Para eso se requiere reservar una mesa y es en la tercera opción:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/c81ba7f9-98a3-43ce-abad-f249aec11dd7)

Para mejoras futuras esta opción también debe mostrar los restaurantes mas cercanos a elegir para asistir así como realizar un previo pago por reservación, solo que a manera de ejemplo solo permite en un solo restaurant.
Dentro de esta opción tenemos 3 cuadros de selección. Y se tienen que abrir en orden ascendente para evitar error, se puede también trabajar en proteger el inicio sin embargo por ser un proyecto demostrativo no fue posible terminarlo.
En la primera opción se pueden observar las mesas:
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/0bf509a7-c85b-4ded-8668-eb7ea242ce7d)

Lo ideal de esta opción, sería que mostrará varias fotos de la mesa a reservar, el programa en automático buscara en la base de datos si existen disponibilidad, y las mesas solo pueden ser apartadas a partir del día siguiente de la solicitud de una reservación y máximo 2 días más, pero eso dependiendo del cliente si requiere esta opción se puede habilitar como sea necesario.

Una vez elegida la mesa, al presionar el siguiente select nos mostrará las fechas disponibles de esa mesa:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/6cbb52a7-2be3-4ce0-992f-6ef467ae8eb8)

Como se mencionó anteriormente solo fue programado a partir del día siguiente, como este tutorial se creo el día 10 de mayo muestra a partir del 11 de mayo y dos días mas los cuales son el 12 y 13 de mayo. 
El sistema hace consultas a la base de datos para validar si esos días están ocupados, dentro de nuestra base de datos se pueden observar las reservaciones:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/d00e78db-1c61-4882-aac2-8d9ad67b76be)

Como se puede observar hay reservaciones de este día ya que fueron realizadas un día o dos días anteriormente mientras se realizaban las pruebas finales al sistema. 
Ahora bien viendo esta imagen se puede ver que el día 11 la mesa1 esta apartada de 8:00 a 10:00 y de 16:00 a 18:00, por lo que si se elige ese día en la opción 3 que es la hora, solo se mostrarán las horas disponibles:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/cd23ec45-2ce3-4a0c-9267-9ce35ccb0e64)

Cabe mencionar que el sistema tiene pequeños fallos por lo que se requiere en ocasiones estar seleccionando la mesa y la fecha.
Una vez seleccionada nuestra tercera opción hay que dar click en reservar :
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/204bbb74-9376-49cd-a6d4-34135e666032)


Después de eso se mostrará una ventana de la reservación para pasar al menú de pedidos de comida comida:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/cc310876-3b49-4059-b191-ae38ef5b9b0a)

En este punto como mejora al sistema sería en caso de que el usuario tarde en elegir, se estén actualizando los campos en tiempo real ya que otro pudo haber reservado y pagado una mesa antes y él no pueda reservar la hora deseada.
## Ir a pedidos sin elegir tipo de pedido
En caso de no haber elegido una opción se puede pasar directamente cerrando la ventana y abajo en nuestro footer en las opciones de nuestra compañía Ir a pedidos:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/d54cbcd6-04ea-459f-92fc-3cc08cdf79c9)

## ¿Como elegir tipo de pedido si se cerró?
En caso de cerrar por error la ventana, para elegir un pedido puedes entrar en la opción de nuestro encabezado elegir tipo de pedido:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/9b05c3a6-f017-49fa-a82d-b4fe2b1520c6)

### Pedidos de comida
En esta opción se muestran los diferentes platillos a elegir, y cambia nuestro encabezado con el tipo de elección de los apartados anteriores   Entrega a domicilio, Recoger en tienda y Reservar mesa:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/86b0e9fe-0d27-4164-b64c-38490209e768)

Como se puede observar se eligió mesa reservada, aquí abajo ya puedes elegir los diferentes platillos. Viendo la otra parte del sitio se puede observar el precio de cada uno, así como dos botones para pedir más de uno y al mismo tiempo en la parte superior e inferior se mostrará el total a pagar:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/9e1dbb11-7376-4c24-af77-f3d2eae06fcd)

Además de eso se activo el botón pagar ya con el total. Cabe mencionar que para realizar el pago es necesario registrarse o iniciar sesión. En caso de hacerlo o desistir y cancelar la compra, el sitio nos redirigirá al sitio inicial, para volver a comenzar desde 0.
Otro punto a mostrar es el pie de página el cual gracias a react puede reutilizarse así como el encabezado sin tener que reescribir el código.
## Iniciar sesión o registrarse
Para poder realizar un pago es necesario haber elegido el tipo de pedido y haber iniciado sesión, en caso de no tener cuenta, es posible realizar un registro. Para hacerlo en el encabezado tenemos estas dos opciones:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/f0ab77f7-5f4c-45b7-9749-9ef3d3757ba0)

Dentro de nuestra base de datos tenemos el registro de los datos de los usuarios:
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/c9c02002-e33e-403b-8d46-84e0c559286e)

### Iniciar Sesión
Para iniciar sesión es simplemente presionar el botón de iniciar sesión presentado en el apartado anterior pidiéndonos número de teléfono y contraseña:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/afd42315-ed9c-4d83-881e-edd00b936e9d)

Una vez puestos los datos solo presionar el botón de iniciar sesión.

### Registrarse
Para el registro, y al igual que el apartado anterior solo es presionar el botón en el encabezado de la página llamado  registrarse  o si se encuentra dentro del menú de iniciar sesión se puede cambiar la pestaña a registrarse. Para eso es necesario ingresar los siguientes datos que aparecen en el formulario de registro:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/cb2834fd-a977-479d-b35a-b2daa9c95672)

## Encabezado con información de pedidos
Dependiendo del tipo de pedido en nuestro encabezado se mostrará la información seleccionada como mesa reservada, entrega a domicilio o recoger en tienda:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/785fd0a0-4874-4c95-b228-334925c16426)



### Pago
Una vez seleccionado el tipo de pedido, hecho el registro y elegido los platillos a adquirir se presiona el botón pagar y así mostrara una ventana con los datos de la compra e indicaciones:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/c0d89f61-5aa4-40b5-9564-8faab6c330f7)

### Cancelar
Si se eligió esta opción simplemente nos regresara a la página principal:
 ![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/7598310e-f86b-43a5-8b16-fd3a4f1c28c3)
Que esta página también aparece una vez realizado el pago.

## Block del restaurant
Dentro de nuestra página en la parte inferior tenemos un blog de información del restaurant denominado sobre nosotros: 
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/a351b19c-4b84-493b-aa44-3fae10702866)
El cual además de información también mostrará algunas imágenes y un poco de historia por si eres una persona amante de la lectura y conocimiento de la cultura de este restaurant:
![image](https://github.com/Jesus-007-cmd/restaurante-react-apl/assets/118942603/7751cbaf-c5ee-4fd7-97d5-181631fbb69b)
