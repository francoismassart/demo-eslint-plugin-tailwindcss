@if ($errors->any())
<p class="lg:inline-block mt-2 mt-0 text-sm leading-5 text-red-600 inline">
  {{ $errors->first() }}
</p>
@endif @if (session()->has('status'))
<p class="flex flex-shrink mt-2 mb-2 text-sm leading-5 text-gray-900 custom">
  {{ session('status') }}
</p>
@endif