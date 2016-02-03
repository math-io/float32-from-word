# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

# Positive normal values:
y = linspace( 0, 1001, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./positive_normal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative normal values:
y = linspace( -1001, 0, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./negative_normal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive small values:
y = linspace( 0, 1, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./positive_small.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative small values:
y = linspace( -1, 0, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./negative_small.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive tiny values:
y = linspace( 5e-39, 1e-30, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./positive_tiny.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative tiny values:
y = linspace( -5e-39, -1e-30, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./negative_tiny.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive subnormal values:
y = linspace( 1e-40, 1e-45, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./positive_subnormal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative subnormal values:
y = linspace( -1e-40, -1e-45, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./negative_subnormal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Large positive values:
y = linspace( 1e36, 1e38, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./positive_large.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Large negative values:
y = linspace( -1e36, -1e38, 500 )

x = Array( UInt32, length(y) )
z = Array( Float64, length(y) )
for i in eachindex(y)
	# Mimic implicit type promotion in JavaScript where we need to cast a Float64 to a Float32 before deriving a bit sequence:
	f32 = convert(Float32, y[i])
	x[i] = parse(UInt32, bits(f32), 2)
	z[i] = convert(Float64, f32)
end

data = Dict([
	("x", x),
	("expected", z)
])

outfile = open("./negative_large.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )