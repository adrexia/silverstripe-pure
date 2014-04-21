<% if AvailableMonths %>
	<div class="month-filter">
		<h2 class="accessibility-nonvisual-indicator">Month filter:</h2>
		
		<% loop AvailableMonths %>
			<h3 class="year heading-plain-small">$YearName:</h3>
			<ol class="inline-list months tags">
				<% loop Months %> 
					<li class="label <% if Active %>active primary<% else %> default<% end_if %>"><a href="$MonthLink.XML">$MonthName</a></li>
				<% end_loop %>
			</ol>
		<% end_loop %>
	</div>
<% end_if %>