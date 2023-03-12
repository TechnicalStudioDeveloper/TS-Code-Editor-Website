 // @ts-check
 // Note: type annotations allow type checking and IDEs autocompletion

 const lightCodeTheme = require('prism-react-renderer/themes/github');
 const darkCodeTheme = require('prism-react-renderer/themes/dracula');

 /** @type {import('@docusaurus/types').Config} */
 const config = {
 	title: 'TS Code Editor',
 	tagline: 'TS Code Editor is an Android code editor',
 	url: 'https://github.com/TS-Code-Editor',
 	baseUrl: '/',
 	onBrokenLinks: 'throw',
 	onBrokenMarkdownLinks: 'warn',
 	favicon: 'img/logo.png',
 	// GitHub pages deployment config.
 	// If you aren't using GitHub pages, you don't need these.
 	organizationName: 'TS Code Editor',
 	// Usually your GitHub org/user name.
 	projectName: 'TS Code Editor',
 	// Usually your repo name.

 	// Even if you don't use internalization, you can use this field to set useful
 	// metadata like html lang. For example, if your site is Chinese, you may want
 	// to replace "en" with "zh-Hans".
 	i18n: {
 		defaultLocale: 'en',
 		locales: ['en'],
 	},
 	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
 				docs: {
 					showLastUpdateAuthor: true,
 					showLastUpdateTime: true,
 					sidebarPath: require.resolve('./sidebars.js'),
 					// Please change this to your repo.
 					// Remove this to remove the "edit this page" links.
 					editUrl: 'https://github.com/TechnicalStudioDeveloper/TS-Code-Editor-Website',
 					/*lastVersion: 'current',
 					versions: {
 						current: {
 							label: 'Current',
 							path: '1.0Alpha1'
 						}
 					}*/
 				},
 				blog: {
 					showReadingTime: true,
 					// Please change this to your repo.
 					// Remove this to remove the "edit this page" links.
  					editUrl: 'https://github.com/TechnicalStudioDeveloper/TS-Code-Editor-Website',
 				},
 				theme: {
 					customCss: require.resolve('./src/css/custom.css')
 				}
 			})]
	],
 	themeConfig:
 		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
 		({
 			navbar: {
 				title: 'TS Code Editor',
 				logo: {
 					alt: 'Logo',
 					src: 'img/logo.png',
 				},
 				items: [
 					{
 						type: 'doc',
 						docId: 'Introduction',
 						position: 'left',
 						label: 'Docs'
					},
 					/*{
 						type: 'docsVersionDropdown'
					}*/
					{
						label: 'GitHub',
						position: 'right',
						href:'https://github.com/TS-Code-Editor/TS-Code-Editor'
					},
					{
						label: 'Facebook',
						href: 'https://m.facebook.com/profile.php?id=100019763839969',
						position: 'left'
					},
					{
						label: 'Discord',
						href: 'https://discord.gg/xG7Y6buT',
						position: 'left'
					}
				]
 			},
				footer: {
				style: 'dark',
					links: [
					{
						title: 'Docs',
						items: [
 							{
								label: 'Tutorial',
								to: '/docs/Introduction',
							}
						]
					},
 					{
 						title: 'Community',
 						items: [
 							{
 								label: 'YouTube',
 								href: 'https://youtube.com/@TechnicalStudioDeveloper'
							},
 							{
 								label: 'Discord',
 								href: 'https://discord.gg/xG7Y6buT'
							},
 							{
 								label: 'Facebook',
 								href: 'https://m.facebook.com/profile.php?id=100019763839969'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/TS-Code-Editor'
							}
						]
					}
				],
 				copyright: `Copyright © ${new Date().getFullYear()} TS Code Editor, Inc. Built with Docusaurus.`
 			},
 			prism: {
 				theme: lightCodeTheme,
 				darkTheme: darkCodeTheme,
 			}

 		})
 };

 module.exports = config;