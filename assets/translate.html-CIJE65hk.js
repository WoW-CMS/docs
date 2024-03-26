import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as r,b as i,d as a,e as t,w as n,a as d}from"./app-DXQ2ZpS1.js";const c={},p=d(`<p>La siguiente guía explicará cómo traducir el CMS a su propio idioma si no está en la lista de idiomas soportados.</p><h2 id="paso-1-duplicar-carpeta" tabindex="-1"><a class="header-anchor" href="#paso-1-duplicar-carpeta"><span>Paso 1: Duplicar carpeta</span></a></h2><p>El idioma predeterminado del CMS es <strong>Inglés</strong> (English), por lo que tendrás que hacer una copia de la carpeta de ese idioma y traducir los archivos que contiene. La carpeta se puede encontrar en la siguiente ruta <code>application/languages</code>.</p><p>Luego, debe cambiar el nombre de la carpeta copiada con el nuevo nombre de <strong>idioma</strong>, este debe <strong>coincidir</strong> con los nombres de los idiomas soportados por CodeIgniter 3, para obtener más información puede ver la siguiente lista:</p><details class="hint-container details"><summary>Lista de nombres de idiomas soportados</summary><ul><li>arabic</li><li>armenian</li><li>azerbaijani</li><li>basque</li><li>bengali</li><li>bosnian</li><li>bulgarian</li><li>catalan</li><li>croatian</li><li>czech</li><li>danish</li><li>dutch</li><li>english</li><li>filipino</li><li>finnish</li><li>french</li><li>german</li><li>greek</li><li>gujarati</li><li>hindi</li><li>hungarian</li><li>indonesian</li><li>italian</li><li>japanese</li><li>khmer</li><li>korean</li><li>latvian</li><li>lithuanian</li><li>marathi</li><li>norwegian</li><li>persian</li><li>polish</li><li>portuguese</li><li>portuguese-brazilian</li><li>romanian</li><li>russian</li><li>serbian</li><li>simplified-chinese</li><li>slovak</li><li>slovenian</li><li>spanish</li><li>swedish</li><li>tamil</li><li>thai</li><li>traditional-chinese</li><li>turkish</li><li>ukrainian</li><li>urdu</li><li>vietnamese</li></ul></details><h2 id="paso-2-editar-archivo-language" tabindex="-1"><a class="header-anchor" href="#paso-2-editar-archivo-language"><span>Paso 2: Editar archivo language</span></a></h2><p>Para que el CMS detecte el nuevo idioma, deberá editar el archivo <code>language.php</code> dentro de la nueva carpeta.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;?</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">php</span></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">defined</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">BASEPATH</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> OR</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;"> exit</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">No direct script access allowed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;">return</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">locale</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">en</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">name</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">   =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">English</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Deberás cambiar los parámetros con los del nuevo idioma.</p><table><thead><tr><th>Parámetro</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>locale</strong></td><td>Código de lenguaje (ISO 639)</td></tr><tr><td><strong>name</strong></td><td>Nombre del lenguaje</td></tr></tbody></table><h2 id="paso-3-traducir-otras-secciones" tabindex="-1"><a class="header-anchor" href="#paso-3-traducir-otras-secciones"><span>Paso 3: Traducir otras secciones</span></a></h2>`,11),u=i("code",null,"application/modules/<module>/languages",-1);function h(m,k){const e=l("RouteLink");return o(),r("div",null,[p,i("p",null,[a("Para traducir las otras secciones del CMS, como el administrador, el usuario o un módulo custom. debes ir a la ruta "),u,a(" en la cual deberás hacer lo mismo que en el "),t(e,{to:"/es/blizzcms/guides/contributions/translate.html#paso-1-duplicar-carpeta"},{default:n(()=>[a("Paso 1")]),_:1}),a(".")])])}const F=s(c,[["render",h],["__file","translate.html.vue"]]),b=JSON.parse('{"path":"/es/blizzcms/guides/contributions/translate.html","title":"Cómo traducir a otro idioma","lang":"es-ES","frontmatter":{"title":"Cómo traducir a otro idioma","icon":"bx bx-radio-circle-marked","order":1,"description":"La siguiente guía explicará cómo traducir el CMS a su propio idioma si no está en la lista de idiomas soportados. Paso 1: Duplicar carpeta El idioma predeterminado del CMS es In...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wow-cms.github.io/docs/blizzcms/guides/contributions/translate.html"}],["meta",{"property":"og:url","content":"https://wow-cms.github.io/docs/es/blizzcms/guides/contributions/translate.html"}],["meta",{"property":"og:site_name","content":"WoW-CMS Docs"}],["meta",{"property":"og:title","content":"Cómo traducir a otro idioma"}],["meta",{"property":"og:description","content":"La siguiente guía explicará cómo traducir el CMS a su propio idioma si no está en la lista de idiomas soportados. Paso 1: Duplicar carpeta El idioma predeterminado del CMS es In..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-05T17:56:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-05T17:56:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cómo traducir a otro idioma\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-05T17:56:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Paso 1: Duplicar carpeta","slug":"paso-1-duplicar-carpeta","link":"#paso-1-duplicar-carpeta","children":[]},{"level":2,"title":"Paso 2: Editar archivo language","slug":"paso-2-editar-archivo-language","link":"#paso-2-editar-archivo-language","children":[]},{"level":2,"title":"Paso 3: Traducir otras secciones","slug":"paso-3-traducir-otras-secciones","link":"#paso-3-traducir-otras-secciones","children":[]}],"git":{"createdTime":1672699766000,"updatedTime":1672941415000,"contributors":[{"name":"DZywolf","email":"34007722+DZywolf@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"es/blizzcms/guides/contributions/translate.md","localizedDate":"2 de enero de 2023","autoDesc":true}');export{F as comp,b as data};
