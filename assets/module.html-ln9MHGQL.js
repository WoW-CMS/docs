import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as l,c as t,b as a,d as s,e as o,w as r,a as p}from"./app-DXQ2ZpS1.js";const d={},c=p(`<p>The following guide will explain in detail the structure of a module and how to make a new module <strong>step by step</strong> depending on the difficulty.</p><h2 id="structure-of-a-module" tabindex="-1"><a class="header-anchor" href="#structure-of-a-module"><span>Structure of a module</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span>📂 Module folder</span></span>
<span class="line"><span>|── 📂 config</span></span>
<span class="line"><span>|    |── 🗒️ migration.php</span></span>
<span class="line"><span>|    |── 🗒️ module.php</span></span>
<span class="line"><span>|    └── 🗒️ routes.php</span></span>
<span class="line"><span>|── 📂 controllers</span></span>
<span class="line"><span>|    └── 🗒️ Module.php</span></span>
<span class="line"><span>|── 📂 language</span></span>
<span class="line"><span>|    └── 📂 english</span></span>
<span class="line"><span>|        └── 🗒️ module_lang.php</span></span>
<span class="line"><span>|── 📂 migrations</span></span>
<span class="line"><span>|    └── 🗒️ 20220511000000_create_table.php</span></span>
<span class="line"><span>|── 📂 models</span></span>
<span class="line"><span>|    └── 🗒️ Module_model.php</span></span>
<span class="line"><span>└── 📂 views</span></span>
<span class="line"><span>     └── 🗒️ index.php</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>📂 <strong>config:</strong> Container folder of configs. <ul><li>🗒️ <strong>migration.php:</strong> Configuration file for migrations.</li><li>🗒️ <strong>module.php:</strong> Configuration file that provides module information.</li><li>🗒️ <strong>routes.php:</strong> Configuration file for URI routing.</li></ul></li><li>📂 <strong>controllers:</strong> Container folder of controllers.</li><li>📂 <strong>language:</strong> Container folder of subfolders of language.</li><li>📂 <strong>migrations:</strong> Container folder of database modifier files.</li><li>📂 <strong>models:</strong> Container folder of models.</li><li>📂 <strong>views:</strong> Container folder of view files.</li></ul><div class="hint-container note"><p class="hint-container-title">Note</p><p>The structure provided here may vary depending on the developer and the number of elements used.</p></div><h2 id="how-to-create-a-basic-module" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-basic-module"><span>How to create a basic module?</span></a></h2><p>To start this guide we will create a module with the name <code>example</code>, the main focus of this module will be to display a simple message. To do this we will create the following structure:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span>📂 example</span></span>
<span class="line"><span>|── 📂 config</span></span>
<span class="line"><span>|    └── 🗒️ migration.php</span></span>
<span class="line"><span>|    └── 🗒️ module.php</span></span>
<span class="line"><span>|    └── 🗒️ routes.php</span></span>
<span class="line"><span>|── 📂 controllers</span></span>
<span class="line"><span>|    └── 🗒️ Example.php</span></span>
<span class="line"><span>|── 📂 language</span></span>
<span class="line"><span>|── 📂 migrations</span></span>
<span class="line"><span>|── 📂 models</span></span>
<span class="line"><span>└── 📂 views</span></span>
<span class="line"><span>     └── 🗒️ index.php</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>The name <strong>&quot;example&quot;</strong> of the module you can change to whatever you want but keep in mind that you will have to change the name in different parts of the module to match it <strong><em>(remember to capitalize the first letter in the controller name)</em></strong>.</p></div><h3 id="step-1-module-config-file" tabindex="-1"><a class="header-anchor" href="#step-1-module-config-file"><span>Step 1: Module config file</span></a></h3><p>Once we have created the structure mentioned above, we will find and edit the file <code>module.php</code> in which we will write the following:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;?</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">php</span></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">defined</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">BASEPATH</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> OR</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;"> exit</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">No direct script access allowed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;">return</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">name</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">Example</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">description</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">A simple basic module</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">version</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">     =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">1.0.0</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">author</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">      =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">name</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">WoW-CMS</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">website</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">https://wow-cms.com</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    ],</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">dashboard</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">   =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This file contains important information about the module which is then used in the CMS.</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><strong>name</strong></td><td>Module name</td></tr><tr><td><strong>description</strong></td><td>Brief description of the module</td></tr><tr><td><strong>version</strong></td><td>Module version</td></tr><tr><td><strong>author name</strong></td><td>Author name</td></tr><tr><td><strong>author website</strong></td><td>Author website</td></tr><tr><td><strong>dashboard</strong></td><td>Route to the admin panel of the module</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Remember to change the data provided in the example to your own.</p></div><h3 id="step-2-migration-config-file" tabindex="-1"><a class="header-anchor" href="#step-2-migration-config-file"><span>Step 2: Migration config file</span></a></h3><p>At the end of the previous step, we will find and edit the file <code>migration.php</code> in which we will write the following:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;?</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">php</span></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">defined</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">BASEPATH</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> OR</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;"> exit</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">No direct script access allowed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Migrations Status</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Status of the module&#39;s migration functionality. </span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Disabled by default for security reasons.</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">$</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">config</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">migration_enabled</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> false;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Migrations Version</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Parameter set as the maximum limit to proceed with the</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| migration in the module.</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| The version use timestamp format: YYYYMMDDHHIISS</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">$</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">config</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">migration_version</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =</span><span style="color:#F76D47;--shiki-dark:#F78C6C;"> 0</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Migrations Path</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">| Path to the module migrations folder.</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">|</span></span>
<span class="line"><span style="color:#90A4AE;--shiki-dark:#545454;font-style:italic;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">$</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">config</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">migration_path</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">../migrations/</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This configuration file is necessary when the module requires among its functions to create/modify in the database, but for this guide, we will not use it, so we will continue with the steps.</p><h3 id="step-3-routes-config-file" tabindex="-1"><a class="header-anchor" href="#step-3-routes-config-file"><span>Step 3: Routes config file</span></a></h3><p>Now we will find and edit the last config file <code>routes.php</code> in which we will write the following:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;?</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">php</span></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">defined</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">BASEPATH</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> OR</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;"> exit</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">No direct script access allowed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">$</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">route</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">example</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">][</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">get</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">example/index</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This configuration file has as purpose of redirecting the requests to the functions of the controller. so you can limit them to a specific type of request or rename them depending on what you need.</p><h3 id="step-4-controller-file" tabindex="-1"><a class="header-anchor" href="#step-4-controller-file"><span>Step 4: Controller file</span></a></h3><p>Having finished preparing the files in the config folder we will proceed to find and edit the file <code>Example.php</code> in the controller&#39;s folder in which we will write the following:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;?</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">php</span></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">defined</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">BASEPATH</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> OR</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;font-style:italic;--shiki-dark-font-style:italic;"> exit</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">No direct script access allowed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">class</span><span style="color:#E2931D;--shiki-dark:#FFCB6B;"> Example</span><span style="color:#9C3EDA;--shiki-dark:#C792EA;"> extends</span><span style="color:#E2931D;--shiki-dark:#FFCB6B;"> BS_Controller</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">    public</span><span style="color:#9C3EDA;--shiki-dark:#C792EA;"> function</span><span style="color:#6182B8;--shiki-dark:#82AAFF;"> __construct</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">()</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">        parent</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">::</span><span style="color:#6182B8;--shiki-dark:#82AAFF;">__construct</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6182B8;--shiki-dark:#82AAFF;">        is_module_installed</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">example</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> true);</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9C3EDA;--shiki-dark:#C792EA;">    public</span><span style="color:#9C3EDA;--shiki-dark:#C792EA;"> function</span><span style="color:#6182B8;--shiki-dark:#82AAFF;"> index</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">()</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        $</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">data </span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">=</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">            &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">message</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> =&gt;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">Hello world!</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">        $this-&gt;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">template</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">-&gt;</span><span style="color:#6182B8;--shiki-dark:#82AAFF;">build</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">index</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> $</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">data</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This file is in charge of determining how HTTP requests should be handled. In the example, you can see that several lines have been marked to explain its functionality:</p><ul><li><strong><em>Line 10</em>:</strong> Line located inside the __construct() function is a function to check if the module is installed, if not it will return a 404 page.</li><li><strong><em>Line 13</em>:</strong> The main function of the controller that will process the request.</li><li><strong><em>Lines 15 to 17</em>:</strong> A set of lines that mark an associative array of data where is the message we want to show.</li><li><strong><em>Line 19</em>:</strong> Function of the template library that takes the view file <strong>(index.php)</strong> and passes the data with an associative array <strong>$data</strong>.</li></ul><h3 id="step-5-view-file" tabindex="-1"><a class="header-anchor" href="#step-5-view-file"><span>Step 5: View file</span></a></h3><p>As a final step in this guide of a basic module, we will proceed to find and edit the file <code>index.php</code> in the views folder in which we will write the following:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki shiki-themes material-theme-lighter material-theme-darker" style="background-color:#FAFAFA;--shiki-dark-bg:#212121;color:#90A4AE;--shiki-dark:#EEFFFF;" tabindex="0"><code><span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">section </span><span style="color:#9C3EDA;--shiki-dark:#C792EA;">class</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">=</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">uk-section uk-section-small primary-bg-section</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;"> uk</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">height</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">viewport</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">=</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">expand: true</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">  &lt;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">div </span><span style="color:#9C3EDA;--shiki-dark:#C792EA;">class</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">=</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#91B859;--shiki-dark:#C3E88D;">uk-container</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">    &lt;</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">h3</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;&lt;?=</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;"> $</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">message </span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">?&gt;&lt;/</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">h3</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">  &lt;/</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">div</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&lt;/</span><span style="color:#90A4AE;--shiki-dark:#EEFFFF;">section</span><span style="color:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This file will display the information to the user. In the example, we use HTML with classes from UIKit 3 and we mark a single line <strong>(Line 3)</strong> which is where our <strong>&#39;Hello World!&#39;</strong> will be shown.</p><p><strong>Now you have your first basic module!</strong> now first enter the admin panel, then in the modules section look for its name and install it. To proceed to see it go to <code>yourdomain.tld/example</code> 🎉</p><h2 id="how-to-create-an-advanced-module" tabindex="-1"><a class="header-anchor" href="#how-to-create-an-advanced-module"><span>How to create an advanced module?</span></a></h2>`,34),h={class:"hint-container warning"},k=a("p",{class:"hint-container-title"},"Warning",-1);function D(F,y){const i=e("RouteLink");return l(),t("div",null,[c,a("div",h,[k,a("p",null,[s("Before starting, if you have not yet read the guide on "),o(i,{to:"/blizzcms/developer/module.html#how-to-create-a-basic-module"},{default:r(()=>[s("how to create a basic module?")]),_:1}),s(", we recommend that you read it to proceed with this advanced guide.")])])])}const A=n(d,[["render",D],["__file","module.html.vue"]]),v=JSON.parse('{"path":"/blizzcms/developer/module.html","title":"Writing a Module","lang":"en-US","frontmatter":{"title":"Writing a Module","icon":"bx bxs-extension","order":2,"description":"The following guide will explain in detail the structure of a module and how to make a new module step by step depending on the difficulty. Structure of a module 📂 config: Cont...","head":[["link",{"rel":"alternate","hreflang":"es-es","href":"https://wow-cms.github.io/docs/es/blizzcms/developer/module.html"}],["meta",{"property":"og:url","content":"https://wow-cms.github.io/docs/blizzcms/developer/module.html"}],["meta",{"property":"og:site_name","content":"WoW-CMS Docs"}],["meta",{"property":"og:title","content":"Writing a Module"}],["meta",{"property":"og:description","content":"The following guide will explain in detail the structure of a module and how to make a new module step by step depending on the difficulty. Structure of a module 📂 config: Cont..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-01-09T06:01:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-09T06:01:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Writing a Module\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-09T06:01:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Structure of a module","slug":"structure-of-a-module","link":"#structure-of-a-module","children":[]},{"level":2,"title":"How to create a basic module?","slug":"how-to-create-a-basic-module","link":"#how-to-create-a-basic-module","children":[{"level":3,"title":"Step 1: Module config file","slug":"step-1-module-config-file","link":"#step-1-module-config-file","children":[]},{"level":3,"title":"Step 2: Migration config file","slug":"step-2-migration-config-file","link":"#step-2-migration-config-file","children":[]},{"level":3,"title":"Step 3: Routes config file","slug":"step-3-routes-config-file","link":"#step-3-routes-config-file","children":[]},{"level":3,"title":"Step 4: Controller file","slug":"step-4-controller-file","link":"#step-4-controller-file","children":[]},{"level":3,"title":"Step 5: View file","slug":"step-5-view-file","link":"#step-5-view-file","children":[]}]},{"level":2,"title":"How to create an advanced module?","slug":"how-to-create-an-advanced-module","link":"#how-to-create-an-advanced-module","children":[]}],"git":{"createdTime":1663539979000,"updatedTime":1673244105000,"contributors":[{"name":"DZywolf","email":"34007722+DZywolf@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":3.05,"words":915},"filePathRelative":"blizzcms/developer/module.md","localizedDate":"September 18, 2022","autoDesc":true}');export{A as comp,v as data};
