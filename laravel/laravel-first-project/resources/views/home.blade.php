<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Sono la home</h1>
    <a href="{{ route('home') }}">home</a>
    <a href="{{ route('about') }}">About</a>

    @if ( true )
        <h2>mi vedi {{ $nome }}</h2>
    @endif

    <ul>
        {{-- @if( count( $students ) > 0 )
            @foreach ( $students as $student )
                <li>{{ $student }}</li>
            @endforeach
        @else
            <h3>Non ci sono dati</h3>
        @endif --}}


        @forelse ( $students as $student )
            <li>{{ $student }}</li>
        @empty
            <h3>Non ci sono dati</h3>
        @endforelse

    </ul>




</body>
</html>
