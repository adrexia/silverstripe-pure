<header class="header" role="banner">

	<% if $AvailableTranslations %>
	<div class="pure-g">
		<div class="pure-u-1">
			<h2 class="accessibility-nonvisual-indicator">Language Selector</h2>
			<ul id="lang" class="translations inline-list">
				<% loop $AvailableTranslations %>
					<li>
						<a href="$Link" lang="$LangName" hreflang="$LangName" class="<% if Current %>current  pure-button pure-button-default pure-button-pill<% end_if %>">
							$LangName
						</a>
					</li>
				<% end_loop %>
			</ul>
		</div>
	</div>
	<% end_if %>
	<div class="pure-g">
		<<% if ClassName=="HomePage" %>h1<% else %>div<% end_if %> class="brand pure-u-1 pure-u-md-2-3">
			<% if SiteConfig.Logo %>
				<a title="Return to homepage" href="$BaseHref" style="padding-left: {$SiteConfig.Logo.Width}px; height: {$SiteConfig.Logo.Height}px; min-height: {$SiteConfig.Logo.Height}px;">
					<img src="$SiteConfig.Logo.URL" width="$SiteConfig.Logo.Width" height="$SiteConfig.Logo.Height" alt="$SiteConfig.Title logo" title="$SiteConfig.Title" />
					<span>$SiteConfig.Title</span>
				</a>
			<% else %>
				<a title="Return to homepage" href="$BaseHref">
					<span>
						$SiteConfig.Title
					</span>
				</a>
			<% end_if %>
		</<% if ClassName=="HomePage" %>h1<% else %>div<% end_if %>>
		<div class="search-group pure-u-1 pure-u-md-1-3">
			$SearchForm
		</div>
	</div>
</header>
