import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as r}from"./app-DXQ2ZpS1.js";const o={},i=r(`<p>De forma predeterminada, el CMS tiene su entorno configurado en <strong>&quot;production&quot;</strong>, que es muy diferente de las versiones anteriores. Debido a esto, para poder desarrollar módulos o alguna característica nueva para el CMS y poder ver los posibles <strong>errores al desarrollar</strong>, deberás modificar este parámetro dependiendo del servidor web.</p><h2 id="¿como-cambiar-el-parametro-de-entorno-en-apache" tabindex="-1"><a class="header-anchor" href="#¿como-cambiar-el-parametro-de-entorno-en-apache"><span>¿Cómo cambiar el parámetro de entorno en Apache?</span></a></h2><p>Si instaló el CMS en <strong>Apache</strong>, busque en su carpeta principal el archivo <code>.htaccess</code> y edítelo agregando la siguiente línea al final del archivo:</p><div class="language-apache line-numbers-mode" data-ext="apache" data-title="apache"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">SetEnv</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;"> CI_ENV development</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Aviso</p><p>Recuerde eliminar esta línea cuando utilice el CMS en entornos de producción.</p></div><h2 id="¿como-cambiar-el-parametro-del-entorno-en-nginx" tabindex="-1"><a class="header-anchor" href="#¿como-cambiar-el-parametro-del-entorno-en-nginx"><span>¿Cómo cambiar el parámetro del entorno en Nginx?</span></a></h2><p>Si instaló el CMS en <strong>Nginx</strong>, en su <strong>bloque de servidor</strong> (host virtual) edítelo agregando la siguiente línea:</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">server</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;"> {</span></span>
<span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">    location</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> ~</span><span style="color:#91B859;--shiki-dark:#C3E88D;"> \\.php$ </span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">{</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        fastcgi_param </span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">CI_ENV </span><span style="color:#91B859;--shiki-dark:#C3E88D;">&quot;development&quot;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">    }</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Aviso</p><p>Recuerde eliminar esta línea cuando utilice el CMS en entornos de producción.</p></div>`,9),t=[i];function s(l,d){return a(),n("div",null,t)}const m=e(o,[["render",s],["__file","environment.html.vue"]]),h=JSON.parse('{"path":"/es/blizzcms/developer/environment.html","title":"Entorno","lang":"es-ES","frontmatter":{"title":"Entorno","icon":"bx bxs-info-square","order":1,"description":"De forma predeterminada, el CMS tiene su entorno configurado en \\"production\\", que es muy diferente de las versiones anteriores. Debido a esto, para poder desarrollar módulos o a...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wow-cms.github.io/docs/blizzcms/developer/environment.html"}],["meta",{"property":"og:url","content":"https://wow-cms.github.io/docs/es/blizzcms/developer/environment.html"}],["meta",{"property":"og:site_name","content":"WoW-CMS Docs"}],["meta",{"property":"og:title","content":"Entorno"}],["meta",{"property":"og:description","content":"De forma predeterminada, el CMS tiene su entorno configurado en \\"production\\", que es muy diferente de las versiones anteriores. Debido a esto, para poder desarrollar módulos o a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-07T19:06:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-07T19:06:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Entorno\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-07T19:06:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"¿Cómo cambiar el parámetro de entorno en Apache?","slug":"¿como-cambiar-el-parametro-de-entorno-en-apache","link":"#¿como-cambiar-el-parametro-de-entorno-en-apache","children":[]},{"level":2,"title":"¿Cómo cambiar el parámetro del entorno en Nginx?","slug":"¿como-cambiar-el-parametro-del-entorno-en-nginx","link":"#¿como-cambiar-el-parametro-del-entorno-en-nginx","children":[]}],"git":{"createdTime":1663539979000,"updatedTime":1694113603000,"contributors":[{"name":"DZywolf","email":"34007722+DZywolf@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"es/blizzcms/developer/environment.md","localizedDate":"18 de septiembre de 2022","autoDesc":true}');export{m as comp,h as data};