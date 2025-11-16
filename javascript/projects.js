// Function to show/hide active and hidden cards based on user selection of filters
$(document).ready(function () {
      const activeFilters = new Set();

      $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');

        if (filter === 'all') {
          // Clear all filters and show all cards
          activeFilters.clear();
          $('.filter-btn').removeClass('active');
          $(this).addClass('active');
          $('.card').removeClass('hidden');
        } else {
          // Remove "Show All" active state
          $('.filter-btn.show-all').removeClass('active');

          // Toggle the clicked filter
          if (activeFilters.has(filter)) {
            activeFilters.delete(filter);
            $(this).removeClass('active');
          } else {
            activeFilters.add(filter);
            $(this).addClass('active');
          }

          // If no filters are active, show all
          if (activeFilters.size === 0) {
            $('.filter-btn.show-all').addClass('active');
            $('.card').removeClass('hidden');
          } else {
            // Filter cards based on active filters
            $('.card').each(function () {
              const cardTags = $(this).data('tags').split(',');
              const hasMatch = cardTags.some(tag => activeFilters.has(tag));

              if (hasMatch) {
                $(this).removeClass('hidden');
              } else {
                $(this).addClass('hidden');
              }
            });
          }
        }
      });
    });