<% if MoreThanOnePage %>
<div id="PageNumbers" class="pagination">
	<h3 class="accessibility-nonvisual-indicator">Results</h3>
	<ul class="pure-paginator">
		<li>
			<% if $NotFirstPage %>
				<a class="pure-button prev" href="$PrevLink" title="View the previous page">Prev</a>
			<% else %>
				<a class="pure-button prev disabled" href="#">Prev</a>
			<% end_if %>
		</li>
	
		<% loop PaginationSummary %>
			<li>
				<% if $CurrentBool %>
				<a class="pure-button pure-button-active" href="#">$PageNum</a>
				<% else %>
				<a class="pure-button" href="$Link" title="View page number $PageNum">$PageNum</a>
				<% end_if %>
			</li>
		<% end_loop %>
		<li>
		<% if $NotLastPage %>
			<a class="pure-button next" href="$NextLink" title="View the next page">Next</a>
		<% else %>
			<a class="pure-button next disabled" href="#">Next</a>
		<% end_if %>
		</li>
	</ul>
</div>
<% end_if %>