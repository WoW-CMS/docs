import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,a as s}from"./app-DXQ2ZpS1.js";const o={},t=s(`<p>La siguiente guía explicará paso a paso cómo verificar el <strong>modo estricto</strong> en MySQL/MariaDB y cómo deshabilitar los valores necesarios para ejecutar BlizzCMS.</p><h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos"><span>Requisitos Previos</span></a></h2><p>Antes de comenzar, asegúrese de tener lo siguiente:</p><ul><li>Una instancia con <strong>MySQL/MariaDB</strong></li></ul><h2 id="paso-1-verificar-el-modo-estricto" tabindex="-1"><a class="header-anchor" href="#paso-1-verificar-el-modo-estricto"><span>Paso 1: Verificar el modo estricto</span></a></h2><p>De manera predeterminada MySQL/MariaDB tiene habilitado el modo estricto, por lo que debemos verificar si existen los valores <code>NO_ZERO_IN_DATE</code>, <code>NO_ZERO_DATE</code> y <code>STRICT_TRANS_TABLES</code>. Para ello ejecutaremos la siguiente sentencia SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">SHOW VARIABLES </span><span style="color:#F76D47;--shiki-dark:#F78C6C;">LIKE</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">sql_mode</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Si esos valores <strong>no existen</strong>, continúe con la instalación del CMS; de lo contrario, continúe con el próximo paso de esta guía.</p><h2 id="paso-2-cambiar-el-modo-estricto" tabindex="-1"><a class="header-anchor" href="#paso-2-cambiar-el-modo-estricto"><span>Paso 2: Cambiar el modo estricto</span></a></h2><p>Para eliminar los valores en el modo estricto, busque el archivo <code>my.ini</code> o <code>my.cnf</code> y las siguientes líneas dentro de él:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Nota</p><p>Las ubicaciones más comunes para el archivo my.ini o my.cnf son:</p><p>Windows:</p><ul><li>%PROGRAMDATA%\\MySQL\\MySQL Server X.X\\my.ini or my.cnf</li></ul><p>Linux:</p><ul><li>/etc/my.cnf</li><li>/etc/mysql/my.cnf</li></ul></div><p>Elimine los valores <code>NO_ZERO_IN_DATE</code>, <code>NO_ZERO_DATE</code> y <code>STRICT_TRANS_TABLES</code> de la línea y guárdelo.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>sql_mode=ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Finalmente reinicie su MySQL/MariaDB y continúe con la instalación.</p><div class="hint-container warning"><p class="hint-container-title">Aviso</p><p>Si la línea <code>sql_mode=</code> debajo de <strong>[mysqld]</strong> no existe, agréguela.</p></div>`,16),r=[t];function l(n,c){return a(),i("div",null,r)}const m=e(o,[["render",l],["__file","disable-strict-mode.html.vue"]]),h=JSON.parse('{"path":"/es/blizzcms/guides/database/disable-strict-mode.html","title":"Cómo deshabilitar el modo estricto","lang":"es-ES","frontmatter":{"title":"Cómo deshabilitar el modo estricto","icon":"bx bx-radio-circle-marked","order":1,"description":"La siguiente guía explicará paso a paso cómo verificar el modo estricto en MySQL/MariaDB y cómo deshabilitar los valores necesarios para ejecutar BlizzCMS. Requisitos Previos An...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wow-cms.github.io/docs/blizzcms/guides/database/disable-strict-mode.html"}],["meta",{"property":"og:url","content":"https://wow-cms.github.io/docs/es/blizzcms/guides/database/disable-strict-mode.html"}],["meta",{"property":"og:site_name","content":"WoW-CMS Docs"}],["meta",{"property":"og:title","content":"Cómo deshabilitar el modo estricto"}],["meta",{"property":"og:description","content":"La siguiente guía explicará paso a paso cómo verificar el modo estricto en MySQL/MariaDB y cómo deshabilitar los valores necesarios para ejecutar BlizzCMS. Requisitos Previos An..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-09T06:01:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-09T06:01:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cómo deshabilitar el modo estricto\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-09T06:01:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Requisitos Previos","slug":"requisitos-previos","link":"#requisitos-previos","children":[]},{"level":2,"title":"Paso 1: Verificar el modo estricto","slug":"paso-1-verificar-el-modo-estricto","link":"#paso-1-verificar-el-modo-estricto","children":[]},{"level":2,"title":"Paso 2: Cambiar el modo estricto","slug":"paso-2-cambiar-el-modo-estricto","link":"#paso-2-cambiar-el-modo-estricto","children":[]}],"git":{"createdTime":1670187266000,"updatedTime":1673244105000,"contributors":[{"name":"DZywolf","email":"34007722+DZywolf@users.noreply.github.com","commits":5}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"es/blizzcms/guides/database/disable-strict-mode.md","localizedDate":"4 de diciembre de 2022","autoDesc":true}');export{m as comp,h as data};