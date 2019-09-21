package at.meks.microservice.quarkuspostgres;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.SeekableByteChannel;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Named
@ApplicationScoped
public class AddressRepo {

    private Charset charset = StandardCharsets.UTF_8;

    String findById(long personId) throws IOException {
        int offset = ((int)(personId - 1000000000)) * 119;
        Path path = Paths.get(Optional.ofNullable(System.getenv("MS_DATA_FILE")).orElse("dataFile"));
        try (SeekableByteChannel channel = Files.newByteChannel(path)) {
            final ByteBuffer buffer = ByteBuffer.allocateDirect(118);
            channel.position(offset).read(buffer);
            buffer.rewind();
            return charset.decode(buffer).toString();
        }
    }
}
