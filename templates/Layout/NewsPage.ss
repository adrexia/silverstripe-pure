
<% include Breadcrumbs %>
<div class="pure-g pure-g-padding">
	<div class="pure-u-1 pure-u-md-1-4">
		<div class="update-information filter">
			<h2 class="accessibility-nonvisual-indicator">News item information</h2>
			<% include UpdateInfo %>
		</div>
	</div>
	<div class="pure-u-1 pure-u-md-3-4">
		<div id="main" class="main" role="main">
			<h1 class="page-header">$Title</h1>	
			<% if FeaturedImage %>
				<figure class="featured-image right">
					$FeaturedImage.SetWidth(300)
				</figure>
			<% end_if %>
			$Content.RichLinks
			$Form
			
			<% include RelatedPages %>
			$PageComments
		</div>
		<% include ContentFooter %>
	</div>
</div>


