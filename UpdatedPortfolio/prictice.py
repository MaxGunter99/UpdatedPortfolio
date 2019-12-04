# Reverse the string that is inside ()

# ex: as(tron)aut -> asnortaut


def Reverse( s ):

    answer = []
    slices = []
    done = []
    
    for x in range( len( s ) ):

        if s[ x ] == ')':

            slices.append( x )
            s.replace( s[x] , '' )

            while s[ x - 1 ] != '(':

                if s[ x ] != '(':

                    x -= 1

                    answer.append( s[ x ] )
                    s.replace(s[x] , '')

            slices.append( x )
            joined = ''.join( answer )

            sectionToReplace = s[ slices[ 1 ] - 1 : slices[ 0 ] + 1 ]
            newString = s.replace( sectionToReplace , joined )

            done.append( newString )

    temp = done[ len( done ) - 1 ] 

    for i in range( len( temp ) ):
        if newString[i] == ')':
            # print( 'NOT DONE' , newString )
            Reverse( newString )
            i == len( newString )
            return i

    print( done[0] )
    return done[0]

# TESTS
# Reverse( '(Max)' ) # -> xaM
# Reverse( 'Max (Gunter)' ) # -> Max retnuG 
# Reverse( 'Michael (Ale)x(ander) (Gun)ter' ) # -> retGunxaM


# Ring Sum Matrix

# given a matrix, find the sum of the border values

def RingSum( matrix ):

    for row in matrix:
        print( row )

matrix = [
    [8, 8, 9, 0, 0, 0],
    [0, 7, 3, 0, 3, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 4, 1, 0],
    [0, 0, 1, 0, 1, 5],
    [5, 0, 0, 1, 0, 0]
]

RingSum( matrix )

# ex (2,2) sum is 30
