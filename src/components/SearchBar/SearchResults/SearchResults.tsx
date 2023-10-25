import React from "react";

function SearchResults({ city, country }: { city: string; country: string }) {
	return (
		<div>
			{city}, {country}
		</div>
	);
}

export default SearchResults;
