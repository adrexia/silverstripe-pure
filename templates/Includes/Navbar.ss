
<div class="pure-g">
	<nav id="navbar" class="menu-default pure-menu pure-menu-horizontal pure-u-1" role="navigation">

		<h2 class="sr-only">Main navigation</h2>
		<ul class="pure-menu-list">
			<% loop Menu(1) %>
				<li class="$LinkingMode<% if Children %> has-children <% end_if %> pure-menu-item">
					<a href="$Link" class="$LinkingMode pure-menu-link <% if $LinkingMode = current %> pure-menu-selected<% end_if %>">
						$MenuTitle.XML
					</a>
					<% if Children %>
						<ul class="pure-menu-children">
							<% loop Children %>
								<li class="pure-menu-item">
									<a href="$Link" class="pure-menu-link">$MenuTitle.XML</a>
								</li>
							<% end_loop %>
						</ul>
					<% end_if %>
				</li>
			<% end_loop %>
		</ul>
	</nav>
</div>
