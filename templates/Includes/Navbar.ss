
<div class="pure-g">
	<nav id="navbar" class="menu-default pure-menu pure-menu-horizontal pure-u-1" role="navigation">

		<h2 class="accessibility-nonvisual-indicator">Main navigation</h2>
		<ul class="">
			<% loop Menu(1) %>
				<li class="$LinkingMode<% if Children %> has-children <% end_if %>">
					<a href="$Link" class="$LinkingMode<% if $LinkingMode = current %> pure-menu-selected<% end_if %>">
						$MenuTitle.XML
					</a>
					<% if Children %>
					<div class="dropdown">
						<ul>
							<% loop Children %>
								<li>
									<a href="$Link">$MenuTitle.XML</a>
								</li>
							<% end_loop %>
						</ul>
					</div>
					<% end_if %>
				</li>
			<% end_loop %>
		</ul>
	</nav>
</div>
