import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as d,c,b as e,d as s,e as a,w as n,a as l}from"./app-DXQ2ZpS1.js";const p={},h=l('<p>Bienvenido, nos alegra que esté interesado en instalar BlizzCMS. Para esto, se le guiará sobre cómo instalar el CMS con diferentes métodos dependiendo de la familiaridad que tenga con ellos.</p><h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos"><span>Requisitos Previos</span></a></h2><p>Antes de comenzar, asegúrese de tener lo siguiente:</p><ul><li>Servidor web (<strong>Apache</strong>/<strong>Nginx</strong>) <ul><li>Habilitar módulos: mod_headers - mod_rewrite</li></ul></li><li><strong>MySQL 5.7+</strong> o <strong>MariaDB 10.6+</strong></li><li><strong>PHP 7.4</strong> o más reciente recomendado <ul><li>Habilitar extensiones: bcmath - curl - gd - gmp - intl - mbstring - mysqli - openssl - soap - zip</li></ul></li><li><strong>Composer 2.6+</strong></li></ul><div class="hint-container note"><p class="hint-container-title">Nota</p><p>El CMS requiere que tengas preinstalado un servidor de World of Wacraft con sus respectivas bases de datos.</p></div>',5),u={class:"hint-container warning"},m=e("p",{class:"hint-container-title"},"Aviso",-1),k=e("strong",null,"modo estricto",-1),g=e("code",null,"NO_ZERO_IN_DATE",-1),b=e("code",null,"NO_ZERO_DATE",-1),v=e("code",null,"STRICT_TRANS_TABLES",-1),E=e("p",null,"Si aún no tienes instalados los requisitos previos, puedes consultar las siguientes guías para instalarlos:",-1),F=e("h3",{id:"guias-para-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#guias-para-linux"},[e("span",null,"Guías para Linux")])],-1),y=e("h2",{id:"instalacion-manual",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instalacion-manual"},[e("span",null,"Instalación Manual")])],-1),_={href:"https://github.com/WoW-CMS/BlizzCMS/releases",target:"_blank",rel:"noopener noreferrer"},A=l(`<li><p>Abra un shell y ejecute los siguientes comandos para instalar las dependencias</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">cd</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> directorio-del-sitio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">composer</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> install</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-plugins</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-scripts</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Por último, establezca el permiso <code>755</code> para todas las carpetas y el permiso <code>644</code> para todos los archivos en la raíz de su sitio</p></li>`,2),B=l(`<p>🎉 Ahora abra una pestaña del navegador con su <strong>IP/Dominio</strong> para continuar el proceso de instalación</p><h2 id="instalacion-con-git" tabindex="-1"><a class="header-anchor" href="#instalacion-con-git"><span>Instalación con Git</span></a></h2><ol><li><p>Abra un shell y ejecute los siguientes comandos para clonar el repositorio</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">cd</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> directorio-del-sitio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">git</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> clone</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> https://github.com/WoW-CMS/BlizzCMS.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ejecute el siguiente comando para instalar las dependencias</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">composer</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> install</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-plugins</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-scripts</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Por último, establezca el permiso <code>755</code> para todas las carpetas y el permiso <code>644</code> para todos los archivos en la raíz de su sitio</p></li></ol><p>🎉 Ahora abra una pestaña del navegador con su <strong>IP/Dominio</strong> para continuar el proceso de instalación</p><h2 id="instalacion-con-docker" tabindex="-1"><a class="header-anchor" href="#instalacion-con-docker"><span>Instalación con Docker</span></a></h2><ol><li><p>Abra un shell y ejecute los siguientes comandos para clonar el repositorio</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">cd</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> directorio-del-sitio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">git</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> clone</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> https://github.com/WoW-CMS/BlizzCMS.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Edite el archivo <code>.env.example</code> con sus datos y renómbrelo a <code>.env</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span>APP_NAME=blizzcms</span></span>
<span class="line"><span>APP_PORT=&lt;Puerto del servidor web&gt;</span></span>
<span class="line"><span>APP_DB_ADMIN_PORT=&lt;Puerto de PHPMyAdmin&gt;</span></span>
<span class="line"><span>DB_PORT=&lt;Puerto de MariaDB&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MYSQL_ROOT_PASS=&lt;Contraseña de root&gt;</span></span>
<span class="line"><span>MYSQL_USER=&lt;Nuevo usuario&gt;</span></span>
<span class="line"><span>MYSQL_PASS=&lt;Contraseña de usuario&gt;</span></span>
<span class="line"><span>MYSQL_DB=&lt;Nombre de la base de datos&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ejecute el siguiente comando para construir la imagen de docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">docker-compose</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Después de terminar de construir la imagen, ejecute el siguiente comando para iniciar el contenedor</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">docker-compose</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> up</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> -d</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Por último, ejecute el siguiente comando para instalar las dependencias</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#E2931D;--shiki-dark:#FFCB6B;">docker</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> exec</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> -d</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> blizzcms-webserver</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> composer</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> install</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-plugins</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-scripts</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-interaction</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> --no-progress</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>🎉 Ahora abra una pestaña del navegador con su <strong>IP/Dominio</strong> para continuar el proceso de instalación</p>`,7);function C(D,x){const i=t("RouteLink"),o=t("ExternalLinkIcon");return d(),c("div",null,[h,e("div",u,[m,e("p",null,[s("Debe tener el "),k,s(" deshabilitado en MySQL/MariaDB a los valores "),g,s(", "),b,s(" y "),v,s(". Para verificarlo y deshabilitarlo, puede seguir la siguiente guía "),a(i,{to:"/es/blizzcms/guides/database/disable-strict-mode.html"},{default:n(()=>[s("Cómo deshabilitar el modo estricto")]),_:1})])]),E,F,e("ul",null,[e("li",null,[a(i,{to:"/es/blizzcms/guides/linux/lamp-stack.html"},{default:n(()=>[s("Cómo instalar LAMP Stack")]),_:1})]),e("li",null,[a(i,{to:"/es/blizzcms/guides/linux/lemp-stack.html"},{default:n(()=>[s("Cómo instalar LEMP Stack")]),_:1})]),e("li",null,[a(i,{to:"/es/blizzcms/guides/linux/composer.html"},{default:n(()=>[s("Cómo instalar Composer")]),_:1})])]),y,e("ol",null,[e("li",null,[e("p",null,[s("Descargue la "),e("a",_,[s("última versión"),a(o)]),s(", y extráigala donde estará la raíz de su sitio.")])]),A]),B])}const f=r(p,[["render",C],["__file","getting-started.html.vue"]]),P=JSON.parse('{"path":"/es/blizzcms/getting-started.html","title":"Empezando","lang":"es-ES","frontmatter":{"title":"Empezando","icon":"bx bxs-book-open","order":2,"description":"Bienvenido, nos alegra que esté interesado en instalar BlizzCMS. Para esto, se le guiará sobre cómo instalar el CMS con diferentes métodos dependiendo de la familiaridad que ten...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wow-cms.github.io/docs/blizzcms/getting-started.html"}],["meta",{"property":"og:url","content":"https://wow-cms.github.io/docs/es/blizzcms/getting-started.html"}],["meta",{"property":"og:site_name","content":"WoW-CMS Docs"}],["meta",{"property":"og:title","content":"Empezando"}],["meta",{"property":"og:description","content":"Bienvenido, nos alegra que esté interesado en instalar BlizzCMS. Para esto, se le guiará sobre cómo instalar el CMS con diferentes métodos dependiendo de la familiaridad que ten..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-08T23:10:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-08T23:10:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Empezando\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-08T23:10:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Requisitos Previos","slug":"requisitos-previos","link":"#requisitos-previos","children":[{"level":3,"title":"Guías para Linux","slug":"guias-para-linux","link":"#guias-para-linux","children":[]}]},{"level":2,"title":"Instalación Manual","slug":"instalacion-manual","link":"#instalacion-manual","children":[]},{"level":2,"title":"Instalación con Git","slug":"instalacion-con-git","link":"#instalacion-con-git","children":[]},{"level":2,"title":"Instalación con Docker","slug":"instalacion-con-docker","link":"#instalacion-con-docker","children":[]}],"git":{"createdTime":1663539979000,"updatedTime":1696806603000,"contributors":[{"name":"DZywolf","email":"34007722+DZywolf@users.noreply.github.com","commits":16}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"es/blizzcms/getting-started.md","localizedDate":"18 de septiembre de 2022","autoDesc":true}');export{f as comp,P as data};
