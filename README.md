![alt text](https://github.com/NicolasMuras/lookdaluv/blob/main/core/static/images/banner.jpg?raw=true)

<h2><a id="user-content-tabla-de-contenido" class="anchor" aria-hidden="true" href="#tabla-de-contenido"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>WIKI
</h2>
<ul>
  <li><a href="#configuracion-de-entorno">Configuración del entorno de desarrollo</a></li>
  <li><a href="#uso-de-git">Uso de git</a></li>
  <li><a href="#comandos-utiles">Comandos utiles</a></li>
</ul>

<h2><a id="configuracion-de-entorno" class="anchor" aria-hidden="true" href="#instalación-de-dependencias"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Configuración del entorno de desarrollo</h2>

<p>Para correr este proyecto se necesitan las siguientes dependencias:</p>
<ul>
<li><a href="https://es.reactjs.org/" rel="nofollow">React</a> (sólo necesario para modo desarrollo o testing).</li>
<li><a href="https://nodejs.org/en/download/" rel="nofollow">NodeJS</a> Incluye paquete 'npm'.</li>
<li><a href="https://cli.github.com" rel="nofollow">Github CLI</a> Nos permitira subir y traer cambios del repositorio principal.</li>
</ul>

<br>
<strong>Paso 1: Descargar e instalar NodeJS y npm.</strong>
<br>
<br>
https://nodejs.org/en/download/. Hagan clic en el boton 'Windows Installer' para descargar el archivo de instalación. El instalador NodeJS incluye el paquete npm el cual utilizaremos para iniciar el servidor de react.
<br>
<br>
<strong>Paso 2: Checkear que este instalado node y npm.</strong>
<br>
<br>
Abrir una consola de comandos (o PowerShell), y escribir lo siguiente:

<pre><code>node -v
</code></pre>

Con eso el sistema nos dira la version de Node.JS instalada en el sistema, hacemos lo mismo para ver NPM:

<pre><code>npm -v
</code></pre>
<br>
<strong>Paso 3: Instalar React.</strong>
<br>
<br>
Instalaremos React con el siguiente comando en la consola o powershell.

<pre><code>npm install -g create-react-app
</code></pre>

Para comprobar si se instalo React (nos debe aparecer una version).

<pre><code>npm create-react-app --version
</code></pre>

<p>Una vez instaladas las dependencias se puede correr la aplicación.</p>
<br>
<strong>Paso 4: Instalar Github CLI.</strong>
<br>
<br>
Descargar Github CLI de la siguiente pagina: https://cli.github.com
<br>
<br>
<strong>Paso 5: Instalar librerias.</strong>
<br>
<br>
<pre><code>npm install --save redux-thunk
</code></pre>


<h2><a id="uso-de-git" class="anchor" aria-hidden="true" href="#implementación-del-proyecto"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Uso de git</h2>

<strong>Iniciar una nueva tarjeta:</strong>

Lo primero es posicionarnos en la rama principal del proyecto 'main':

<pre><code>git checkout main
</code></pre>

<strong>Desde aqui crearemos una nueva rama para trabajar:</strong>

<pre><code>git checkout -b issue_0001
</code></pre>

<em>
  Nota: Se debe seguir la siguiente nomenclatura: issue_xxxx. El numero sera el mismo que el que encontraremos en la tarjeta. (Ej: #24).
</em>

<br>
<br>
<strong>Enviar los cambios para su revisión:</strong>

<br>
<br>
Una vez hayan hecho modificaciones en los archivos podran ver los cambios en Visual Studio Code, lo mejor es chequear que este todo en orden antes de proceder a enviar los cambios. Se utilizan los siguientes comandos:
<br>
<br>
<em>
  Para ver los archivos modificados.
</em>
<pre><code>git status
</code></pre>

<em>
  Para añadir el archivo.
</em>
<pre><code>git add src/ejemplo.css
</code></pre>

<em>
  Para empaquetar todo y que quede listo para enviar. Si el issue es una Feature va el prefijo 'feat:' si es una corrección va 'fix:'.
</em>
<pre><code>git commit -m "feat: nuevo diseño de la vista del perfil."
</code></pre>

<em>
  Deberan poner el nombre de la rama en la que trabajan, si es la primera vez que envian cambios creara la rama en GitHub.
</em>
<pre><code>git push origin issue_0001
</code></pre>
<br>
<br>
<strong>Actualizar repositorio local.</strong>
<br>
<br>
<em>
  Nos posicionamos en la rama main (checkout nos sirve tambien para cambiarnos de rama).
</em>
<pre><code>git checkout main
</code></pre>

<em>
  Traemos los cambios de Github a nuestro repositorio local para actualizarlo.
</em>
<pre><code>git pull origin main
</code></pre>

<br>
<br>
<strong>Otros comandos utiles:</strong>
<br>
<br>
<em>
  Ver en que rama estamos.
</em>
<pre><code>git branch
</code></pre>

<em>
  Remover archivo del commit.
</em>
<pre><code>git remove core/archivo.html
</code></pre>


<h2><a id="user-content-comandos-utiles" class="anchor" aria-hidden="true" href="#comandos-utiles"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Comandos utiles</h2>


<strong>Generar demo data:</strong>

Te permite eliminar los datos de la base de datos y volver a crear datos demo que sirven para hacer pruebas.

<pre><code>from core.scripts.generate_demo_data import execute
execute()
</code></pre>

<em>
  Nota: Te advertira sobre si deseas cancelar o continuar con la operación.
</em>

<br>
<br>
<strong>Crear usuario admin:</strong>
<br>
<br>
Te permite crear un usuario para el panel /admin.
<br>
<br>
<pre><code>python manage.py createsuperuser
</code></pre>

<em>
  Nota: Debes seguir las instrucciones.
</em>

<br>
<br>
<strong>Configurar Base de Datos:</strong>
<br>
<br>
Instrucciones para la creación de la base de datos.
<br>
<br>
<pre><code>sudo su postgres
createuser --interactive
psql
CREATE DATABASE lookdaluv;
GRANT ALL PRIVILEGES ON DATABASE lookdaluv TO 'EL ROL RECIEN CREADO';
exit
exit
python manage.py migrate_schemas
</code></pre>

<em>
  Nota: Para sistemas Linux.
</em>
<br>
<br>
<strong>Iniciar el proyecto:</strong>
<br>
<br>
<pre><code>npm start
</code></pre>
